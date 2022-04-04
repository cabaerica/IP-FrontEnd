import './stylesheets/App.css';
import Product from './components/Product';
import ProductCard from './components/ProductCard'
import NavBar from './components/NavBar'
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";
import FirstPage from "./components/FirstPage";
import ShoppingCart from "./components/ShoppingCart";
import Wishlist from "./components/Wishlist";
import Catalog from "./components/Catalog";
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
    const [data,setData] = useState([]);
    const getDataProducts=()=>{
        fetch('Data/products.json'
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

    const getDataCart=()=>{
        fetch('Data/cart.json'
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

    const getDataClient=()=>{
        fetch('Data/client.json'
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

    const postData=async ()=> {
        fetch('Data/cart.json',
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
        getDataProducts()
        getDataCart()
        getDataClient()

        //postDataProducts() //TUDOR
        //postDataClient() //Tudor
        //postDataCart() //Tudor

        //putDataProducts() //Cosmin
        //putDataCart() //Cosmin
        //putDataClient() //Cosmin

    },[])

    return(
        <div className="App">
            {
                data && data.length>0 && data.map((item)=><h1>{item.title}</h1>)
            }
        </div>
    );




    /*return (
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route path="/product" element={<Catalog/>} />
                <Route path="/cart" element={<ShoppingCart/>} />
                <Route path="/wishlist" element={<Wishlist/>} />
                <Route path="/" element={<FirstPage/>} />
            </Routes>
        </BrowserRouter>
    );*/



}

export default App;