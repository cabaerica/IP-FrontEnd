import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import {useEffect, useState} from "react";
import FirstPage from "./components/FirstPage";
import User from "./components/User";
import ShoppingCart from "./components/ShoppingCart";

const URL_PRODUCT  = 'https://buyit-project.herokuapp.com/api/products';
//const URL_CART = 'http://localhost:8000/data';
const URL_CART = 'https://eureka-server-buyit.herokuapp.com/';
const URL_USER = 'http://localhost:8000/clients';

function App() {
    const [userData, setUserData] = useState([]);
    const [productData, setProductData] = useState([{}]);
    const [cartData, setCartData] = useState([]);
    const [wishlistData, setWishlistData] = useState([]);
    //folosim parametri pentru a nu avea 4 functii identice pentru fiecare data
    const getData =  (URL, setData) => {
        fetch(URL
            , {
                mode: 'no-cors',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'access-control-request-headers': 'content-type'
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
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: "Metoda POST",
                    quantity: "2"
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
                mode: 'no-cors',
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    title: "MEtoda PUT!!",
                    quantity: "5"
                })
            }).then(function (response) {
            console.log(response)
            return response.json();
        })
            .then(function (myJson) {
                console.log("-------");
                setData(data)
            });
    }

    const deleteData = async (URL) => {
        fetch(URL, {
            mode: 'no-cors',
            method: 'DELETE'
        })
            .then(() => console.log("Deleted object!"));
    }

    //-->Cosmin incepe codul

    useEffect(() => {
        //getData(URL_PRODUCT, setProductData)
        getData(URL_CART, setCartData)
        //console.log(cartData)
        //getData(URL_USER, setUserData)
        //postData(URL_PRODUCT, setProductData,productData) //TUDOR
        //postData(URL_PRODUCT, setProductData,productData) //TUDOR
        //postData(URL_CART, setCartData,cartData) //Tudor
        //postData(URL_USER, setUserData,userData) //Tudor

        //putData(URL_PRODUCT+'/FwIQJYO', setProductData, productData) //Cosmin
        //putData(URL_CART +'/A5kxWl2', setCartData,cartData) //Cosmin
        //putData(URL_USER +'/1', setUserData,userData) //Cosmin

        //deleteData(URL_PRODUCT+'/FwIQJYO')
        //deleteData(URL_CART+'/oYfprmE')
        //deleteData(URL_USER+'/4ouVoUP')

    }, [])


    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/products" element={<Home/>}/>
                <Route path="/cart" element={<ShoppingCart/>} />
                <Route path="/firstPage" element={<FirstPage/>}/>
                <Route path="/user" element={<User/>}/>
            </Routes>
        </BrowserRouter>
        );
}

export default App;