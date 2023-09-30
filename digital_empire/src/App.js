import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Products from './pages/Products';
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      {/* <Products/>
      <Cart/> */}
    </div>
  );
}

export default App;
