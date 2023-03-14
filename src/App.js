import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import ShopPage from "./pages/ShopPage/ShopPage";
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
            <Route path="/plantcare" element={<PlantCarePage/>} />
            <Route path="/blogs" element={<BlogsPage/>} />
        </Routes>
        <Footer/> 
      </Router>
           
    </div>
  );
}

export default App;
