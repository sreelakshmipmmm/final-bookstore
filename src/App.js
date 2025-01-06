import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Loginsignup from "./Pages/Loginsignup" ;
import Footer from "./Components/Footer/Footer";
import nf_banner from "./Components/Assets/banner1.gif";
import f_banner from "./Components/Assets/banner2.jpg";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/non fiction"
            element={<ShopCategory banner={nf_banner} category="non fiction" />}
          />
          <Route
            path="/fiction"
            element={<ShopCategory banner={f_banner} category="fiction" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Loginsignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
