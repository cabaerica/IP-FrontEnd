import './stylesheets/App.css';
import Product from './components/Product';
import ProductCard from './components/ProductCard'
import NavBar from './components/NavBar';
import FirstPage from "./components/FirstPage";
import ShoppingCart from "./components/ShoppingCart";
import Wishlist from "./components/Wishlist";
import Catalog from "./components/Catalog";
import User from './components/User'
import axios from "axios";
import {useEffect, useState} from "react";
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";

const URL_CART = 'http://localhost:8001/cart';
const URL_PRODUCT = 'http://localhost:8000/products';
const URL_USER = 'http://localhost:8002/clients';

function App() {
    const [userData, setUserData] = useState([]);
    const [productData, setProductData] = useState([{}]);
    const [cartData, setCartData] = useState([]);
    const [wishlistData, setWishlistData] = useState([]);
    //folosim parametri pentru a nu avea 4 functii identice pentru fiecare data
    const getData = (URL, setData) => {
        fetch(URL
            , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                console.log("GetData-----");
                setData(myJson)
            });
    }

    const postData = async (URL, setData, data) => {
        fetch(URL,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    title: "Calculator",
                    quantity: "3"
                })
            }).then(function (response) {
            console.log(response)
            return response.json();
        })
            .then(function (myJson) {
                console.log(data.concat(myJson.body));
                setData(data.push(myJson.body))
            });
    }

    const putData = async (URL, setData, data) => {
        fetch(URL,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    title: "Calculator MARIAA",
                    quantity: "5"
                })
            }).then(function (response) {
            console.log(response)
            return response.json();
        })
            .then(function (myJson) {
                console.log("-------^");
                setData(data)
            });
    }

    const deleteData = async (URL) => {
        fetch(URL, {method: 'DELETE'})
            .then(() => console.log("Deleted object!"));
    }
    //-->Cosmin incepe codul

    useEffect(() => {
        getData(URL_PRODUCT, setProductData)
        getData(URL_CART, setCartData)
        getData(URL_USER, setUserData)

        postData(URL_PRODUCT, setProductData,productData) //TUDOR
        //postData(URL_PRODUCT, setProductData,productData) //TUDOR
        //postData(URL_CART, setCartData,cartData) //Tudor
        //postData(URL_USER, setUserData,userData) //Tudor

        putData(URL_PRODUCT+'/wlmE1k3', setProductData, productData) //Cosmin
        putData(URL_CART +'/A5kxWl2', setCartData,cartData) //Cosmin
        putData(URL_USER +'/1', setUserData,userData) //Cosmin
        deleteData(URL_PRODUCT+'/BOfaMNX')

    }, [])

    /*
    return(
        <div className="App">
            {
                productData && productData.length>0 && productData.map((item)=><h1>{item.title}</h1>)
            }
        </div>
    );*/


    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route path="/product" element={<Catalog/>} productData={productData}/>
                <Route path="/cart" element={<ShoppingCart/>} cartData={cartData}/>
                <Route path="/wishlist" element={<Wishlist/>} wishlistData={wishlistData}/>
                <Route path="/user" element={<User/>} userData={userData}/>
                <Route path="/" element={<FirstPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;