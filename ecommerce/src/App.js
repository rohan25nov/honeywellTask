import logo from './logo.svg';
import './App.css';
import ProductDetails from './components/productDetails'


function App() {
  return (
    <div className="App">
      <nav style={{'background-color':'navy','color':'white'}}>
        <ul style={{'list-style-type':'none','text-align':'right'}}>
          <li style={{'float':'right','padding':'10px'}}>Cart</li>
          <li style={{'padding':'10px'}}>Login</li>
        </ul>
      </nav>
      <ProductDetails />
    </div>
  );
}

export default App;
