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

function App() {
    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route path="/product" element={<Catalog/>} />
                <Route path="/cart" element={<ShoppingCart/>} />
                <Route path="/wishlist" element={<Wishlist/>} />
                <Route path="/" element={<FirstPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;