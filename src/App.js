import './stylesheets/App.css';
import Product from './components/Product';
import Card from './components/Card'

function App() {
  return (
    <div className="App" style = {{color: 'black'}}>
      <Product/>
      <Card/>
    </div>
  );
}

export default App;
