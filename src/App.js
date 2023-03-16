import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import PlantCarePage from "./pages/PlantCarePage/PlantCarePage";
import BlogsPage from "./pages/BlogsPage/BlogsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/shop" element={<ShopPage/>} />
            <Route path="/shop/shoppingcart" element={<ShoppingCartPage/>} />
            <Route path="/shop/shoppingcart/checkout" element={<CheckoutPage/>} />
            <Route path="/plantcare" element={<PlantCarePage/>} />
            <Route path="/blogs" element={<BlogsPage/>} />
        </Routes>
        <Footer/> 
      </Router>
           
    </div>
  );
}

export default App;
