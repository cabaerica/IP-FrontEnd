import './stylesheets/App.css';
import Product from './components/Product';
import ProductCard from './components/ProductCard'
import NavBar from './components/NavBar'
function App() {
  return (
    <div className="App" style = {{color: 'black'}}>
      <NavBar/>
      <Product/>
      <ProductCard/>
    </div>
  );
}

export default App;
