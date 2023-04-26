import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import PlantCarePage from "./pages/PlantCarePage/PlantCarePage";
import BlogsPage from "./pages/BlogsPage/BlogsPage";
import AccountPage from "./pages/AccountPage/AccountPage";

import UserPage from "./pages/AccountPage/UserPage/UserPage";
import AddressPage from "./pages/AccountPage/AddressPage/AddressPage";

function App() {
  return (
    <div className="App">
      <Router>
          {/* <Header/> */}
          {/* <main className="main">
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/shop" element={<ShopPage/>} />
              <Route path="/shop/shoppingcart" element={<ShoppingCartPage/>} />
              <Route path="/shop/shoppingcart/checkout" element={<CheckoutPage/>} />
              <Route path="/plantcare" element={<PlantCarePage/>} />
              <Route path="/blogs" element={<BlogsPage/>} />
              <Route path="/account" element={<AccountPage/>}>
                  <Route path="user" element={<AddressPage/>} />
                  <Route path="address" element={<UserPage/>} />
                  <Route path="orders" element={<UserPage/>} />
                  <Route path="wishlist" element={<UserPage/>} />
                  <Route path="support" element={<UserPage/>} />
                  <Route path="reports" element={<UserPage/>} />
                  <Route path="downloads" element={<UserPage/>} />
              </Route>
              
              
            </Routes>
          </main> */}
          
          <Footer/> 
        
      </Router>
           
    </div>
  );
}

export default App;
