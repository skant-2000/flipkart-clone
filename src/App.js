import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductListPage from './pages/ProductListPage';
import { Routes, Route } from "react-router-dom"
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:search" element={<ProductListPage />} />
        <Route path="/:search/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
