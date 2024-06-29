import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Blog";
import Allproduct from "./Allproduct";
import Cow from "./Cow";
import Buffalo from "./Buffalo";
import Ox from "./Ox";
import Transportation from "./Transportation";
import Veterinary from "./Veterinary";
import Animalaccessories from "./Animalaccessories";
import Insurance from "./Insurance";
import Policy from "./Policy";
import Contact from "./Contact";
import News from "./News";
import Forgetpassword from "./forgetpassword/Forgetpassword";
import Otppassword from "./otppassword/Otppassword";
import Changepassword from "./changepassword/Changepassword";
import Profile from "./Profile/Profile";
import EditProfile from "./Profile/EditProfile";
import Rechangepassword from "./Rechangepassword/Rechangepassword";
import Vendor from "./Vendor/Vendor";
import Disease from "./Disease/Disease";
import Product from "./Product/Product";
import Singleblog from "./SingleBlog/SingleBlog";
import Singleproduct from "./SingleProduct/SingleProduct";
import VendorAllproduct from "./Vendor/VenderProduct";
import CheckoutSuccess from "./CheckoutSuccess";
import UpdateProduct from "./Product/UpdateProduct";
import ScrollButton from "./ScrollButton";
import Order from "./Order";
import Venderview from "./Vendor/Venderview";
import SoldProduct from "./Vendor/SoldProduct";

export default function Routers() {
  let pathName = window.location.pathname
  console.log('pathName', pathName)
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/allproduct" element={<Allproduct />}></Route>
          <Route path="/cow" element={<Cow />}></Route>
          <Route path="/buffalo" element={<Buffalo />}></Route>
          <Route path="/ox" element={<Ox />}></Route>
          <Route path="/transportation" element={<Transportation />}></Route>
          <Route path="/veterinary" element={<Veterinary />}></Route>
          <Route path="/insurance" element={<Insurance />}></Route>
          <Route path="/animalaccessories" element={<Animalaccessories />}></Route>
          <Route path="/policy" element={<Policy />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
          <Route path="/otppassword" element={<Otppassword />}></Route>
          <Route path="/changepassword" element={<Changepassword />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/editprofile" element={<EditProfile />}></Route>
          <Route path="/rechangepassword" element={<Rechangepassword />}></Route>
          <Route path="/vendor" element={<Vendor />}></Route>
          <Route path="/disease" element={<Disease />}></Route>
          <Route path="/animalform" element={<Product />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/buy-product" element={<Venderview />}></Route>
          <Route path="/singleblog/:id" element={<Singleblog />}></Route>
          <Route path="/singleproduct/:id" element={<Singleproduct />}></Route>
          <Route path="/vendor-product" element={<VendorAllproduct />}></Route>
          <Route path="/sold-product" element={<SoldProduct />}></Route>
          <Route path="/checkoutSuccess" element={<CheckoutSuccess />}></Route>
          <Route path="/update-product/:id" element={<UpdateProduct />}></Route>





        </Routes>

        {pathName !== "/login" && <Footer />}
        <ScrollButton />
      </BrowserRouter>
    </div>
  );
}


