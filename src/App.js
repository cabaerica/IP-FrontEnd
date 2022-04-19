
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./components/Home";

//const URL_CART = 'http://localhost:8002/cart';
//const URL_PRODUCT = 'http://localhost:8001/products';
//const URL_USER = 'http://localhost:8000/clients';



function App() {
    /*const [userData, setUserData] = useState([]);
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
                    title: "MEtoda POST",
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

        putData(URL_PRODUCT+'/FwIQJYO', setProductData, productData) //Cosmin
        //putData(URL_CART +'/A5kxWl2', setCartData,cartData) //Cosmin
        //putData(URL_USER +'/1', setUserData,userData) //Cosmin

        deleteData(URL_PRODUCT+'/FwIQJYO')
        //deleteData(URL_CART+'/oYfprmE')
        //deleteData(URL_USER+'/4ouVoUP')

    }, [])

    /*
    return(
        <div className="App">
            {
                productData && productData.length>0 && productData.map((item)=><h1>{item.title}</h1>)
            }
        </div>
    );*/




    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
        );
}

export default App;