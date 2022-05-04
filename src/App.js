import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import ProductListPage from './pages/ProductListPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <LandingPage /> */}
      <ProductListPage />
    </div>
  );
}

export default App;
