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

const URL_CART = 'Data/cart.json';
const URL_PRODUCT = 'Data/products.json';
const URL_USER = 'Data/client.json';

function App() {
    const [userData, setUserData] = useState();
    const [productData, setProductData] = useState();
    const [cartData, setCartData] = useState();
    const [wishlistData, setWishlistData] = useState();
    //folosim parametri pentru a nu avea 4 functii identice pentru fiecare data
    const getData=(URL, setData)=>{
        fetch(URL
            ,{
                 method:'GET',
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }

    const postData = async (URL, setData)=> {
        fetch(URL,
            {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([{

                title: "Calculator",
                quantity: "3"
            }])
        }).then(function (response) {
            console.log(response)
            return response.json();
        })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }

    //-->Cosmin incepe codul

    useEffect(()=>{
        getData(URL_PRODUCT, setProductData)
        getData(URL_CART, setCartData)
        getData(URL_USER, setUserData)

        //postData(URL_PRODUCT, setProductData) //TUDOR
        //postData(URL_CART, setCartData) //Tudor
        //postData(URL_USER, setUserData) //Tudor

        //putData(URL_PRODUCT, setProductData) //Cosmin
        //putData(URL_CART, setCartData) //Cosmin
        //putData(URL_USER, setUserData) //Cosmin

    },[])

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
                <Route path="/product" element={<Catalog/>} productData = {productData}/>
                <Route path="/cart" element={<ShoppingCart/>} cartData = {cartData}/>
                <Route path="/wishlist" element={<Wishlist/>} wishlistData = {wishlistData}/>
                <Route path="/user" element={<User/>} userData = {userData}/>
                <Route path="/" element={<FirstPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;