import React from "react";
import { json, Link, useNavigate } from "react-router-dom";
import avtar from "./images/avtar.png"
import { BiUpArrowAlt } from "react-icons/bi"

export default function Header() {
  const navigate = useNavigate()
  let userData = JSON.parse(localStorage.getItem("userData"));
  console.log('userData', userData)
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <>
        <>
          {/* Start Preloader Area */}
          {/* <div className="preloader">
    <div className="loader">
      <img src="assets/img/preloader.gif" alt="preloader" />
      <h2>Loading...</h2>
    </div>
  </div> */}
          {/* End Preloader Area */}
          {/* Start Navbar Area */}
          <header>

            <div className="navbar-area">
              <div className="semental-mobile-nav" style={{ position: "relative", zIndex: "999" }}>
                <div className="logo">
                  {/* <Link href="index-4.html"> */}
                  <img
                    src="assets/img/animalll_final_logo_ForWhiteBack.jpg"
                    style={{ width: "60px" }}
                    alt="logo"
                  />
                  {/*</Link> */}
                </div>
              </div>
              <div className="semental-nav">
                <div className="container">
                  <nav className="navbar navbar-expand-md navbar-light">
                    <Link className="navbar-brand" to="/">
                      <img
                        src="assets/img/f-black-trans.png"
                        style={{ width: "100px" }}
                        alt="logo"
                      />
                    </Link>
                    <div
                      className="collapse navbar-collapse mean-menu"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav align-items-center">
                        {/* <li className="nav-item">
                        <Link href="#" className="nav-link active">
                          Home <i className="icofont-simple-down" />
                       </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link to="/" className="nav-link">
                              Home One
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="index-3.html" className="nav-link">
                              Home Two
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="index-4.html" className="nav-link active">
                              Home Three
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="index-5.html" className="nav-link">
                              Horse Ranch
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="index-6.html" className="nav-link">
                              Equestrian Club
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="index-7.html" className="nav-link">
                              Horse Riding School
                           </Link>
                          </li> */}
                        {/* </ul>
                      </li> */}

                        {/* <li className="nav-item">
                        <Link href="#" className="nav-link">
                          About Us <i className="icofont-simple-down" />
                       </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="about.html" className="nav-link">
                              About Us 1
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="about-2.html" className="nav-link">
                              About Us 2
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="instructor.html" className="nav-link">
                              Instructor
                           </Link>
                          </li>
                        </ul>
                      </li> */}
                        {/* <li className="nav-item">
                        <Link href="#" className="nav-link">
                          Courses <i className="icofont-simple-down" />
                       </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="courses.html" className="nav-link">
                              Courses
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="single-courses.html" className="nav-link">
                              Single Courses
                           </Link>
                          </li>
                        </ul>
                      </li> */}
                        {/* <li className="nav-item">
                        <Link href="#" className="nav-link">
                          Stallions <i className="icofont-simple-down" />
                       </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="stallions.html" className="nav-link">
                              Stallions
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="stallions-details.html"
                              className="nav-link"
                            >
                              Single Stallions
                           </Link>
                          </li>
                        </ul>
                      </li> */}
                        {/* <li className="nav-item">
                        <Link href="#" className="nav-link">
                          Pages <i className="icofont-simple-down" />
                       </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="#" className="nav-link">
                              About Us
                           </Link>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="about.html" className="nav-link">
                                  About Us 1
                               </Link>
                              </li>
                              <li className="nav-item">
                                <Link href="about-2.html" className="nav-link">
                                  About Us 2
                               </Link>
                              </li>
                              <li className="nav-item">
                                <Link href="instructor.html" className="nav-link">
                                  Instructor
                               </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link href="instructor.html" className="nav-link">
                              Instructor
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="#" className="nav-link">
                              Stallions
                           </Link>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="stallions.html" className="nav-link">
                                  Stallions
                               </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="stallions-details.html"
                                  className="nav-link"
                                >
                                  Single Stallions
                               </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link href="#" className="nav-link">
                              Courses
                           </Link>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="courses.html" className="nav-link">
                                  Courses
                               </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="single-courses.html"
                                  className="nav-link"
                                >
                                  Single Courses
                               </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link href="#" className="nav-link">
                              Shop
                           </Link>
                            <ul className="dropdown-menu">
                              <li className="nav-item">
                                <Link href="shop.html" className="nav-link">
                                  Shop
                               </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  href="single-products.html"
                                  className="nav-link"
                                >
                                  Single Products
                               </Link>
                              </li>
                              <li className="nav-item">
                                <Link href="cart.html" className="nav-link">
                                  Cart
                               </Link>
                              </li>
                              <li className="nav-item">
                                <Link href="checkout.html" className="nav-link">
                                  Checkout
                               </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <Link href="pricing.html" className="nav-link">
                              Pricing
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="login.html" className="nav-link">
                              Login
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="signup.html" className="nav-link">
                              Signup
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="error-404.html" className="nav-link">
                              404 Error
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="coming-soon.html" className="nav-link">
                              Coming Soon
                           </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="faq.html" className="nav-link">
                              FAQ
                           </Link>
                          </li>
                        </ul>
                      </li> */}

                        <li className="nav-item">
                          <Link to="/" className="nav-link">
                            Home
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="#" className="nav-link">
                            Products <i className="icofont-simple-down" />
                          </Link>

                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <Link
                                to="/allproduct"
                                className="nav-link"
                              >
                                All Products
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/cow" className="nav-link">
                                Cow
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/buffalo" className="nav-link">
                                Buffalo
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                to="/ox"
                                className="nav-link"
                              >
                                Ox
                              </Link>
                            </li>

                          </ul>
                        </li>




                        <li className="nav-item">
                          <Link to="/blog" className="nav-link">
                            Blog
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="#" className="nav-link">
                            Services <i className="icofont-simple-down" />
                          </Link>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <Link to="/transportation" className="nav-link">
                                Transportation
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/veterinary" className="nav-link">
                                Veterinary
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                to="/insurance"
                                className="nav-link"
                              >
                                Insurance
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                to="/animalaccessories"
                                className="nav-link"
                              >
                                Animal Accessories
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <Link to="/contact" className="nav-link">
                            Contact
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/news" className="nav-link">
                            News
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link to="/disease" className="nav-link">
                            Disease
                          </Link>
                        </li>




                        {/* <li className="nav-item">
                        <Link to="/about" className="nav-link">
                          About
                        </Link>
                      </li> */}
                        {!userData && <li className="nav-item">
                          <Link to="/register" className="nav-link">
                            Register
                          </Link>
                        </li>}
                        {userData && <li className="nav-item">
                          <Link to="#" className="nav-link">
                            <img src={userData?.image || avtar} alt="" width={55} height={55} style={{ objectFit: 'cover' }} className="rounded-pill" />
                          </Link>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <Link to="/profile" className="nav-link">
                                My Profile
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/editprofile" className="nav-link">
                                Edit Profile
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                to="/rechangepassword"
                                className="nav-link"
                              >
                                Change Password
                              </Link>
                            </li>
                            {userData?.role?.role === "vendor" || userData?.role === "640a11bf7387cfb8e11df200" ? <><li className="nav-item">
                              <Link
                                to="/animalform"
                                className="nav-link"
                              >
                                Add Product
                              </Link>
                            </li>
                              <li className="nav-item">
                                <Link
                                  to="/vendor-product"
                                  className="nav-link"
                                >
                                  My Product
                                </Link>
                              </li>
                              <li className="nav-item">
                                <Link
                                  to="/sold-product"
                                  className="nav-link"
                                >
                                  Sold Product
                                </Link>
                              </li> </> : <li className="nav-item">
                              <Link
                                to="/vendor"
                                className="nav-link"
                              >
                                Vendor
                              </Link>
                            </li>}
                            <li className="nav-item">
                              <Link
                                to="/buy-product"
                                className="nav-link"
                              >
                                Order
                              </Link>
                            </li>
                            <li className="nav-item" onClick={() => { localStorage.clear(); navigate("/login") }}>
                              <Link
                                to="/vendor"
                                className="nav-link"
                              >
                                Logout
                              </Link>
                            </li>
                          </ul>
                        </li>}
                      </ul>
                      {!userData ? <div className="others-options">
                        <Link to="/login" className="btn btn-primary">
                          Login <i className="icofont-simple-right" />
                        </Link>
                      </div> : ""}

                      {/* {userData && <li className="nav-item">
                        <Link to="#" className="nav-link">
                          <img src={avtar} alt="" width={60} height={60} />
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link to="/profile" className="nav-link">
                              My Profile
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/editprofile" className="nav-link">
                              Edit Profile
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="/rechangepassword"
                              className="nav-link"
                            >
                              Change Password
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="/vendor"
                              className="nav-link"
                            >
                              Vendor
                            </Link>
                          </li>
                        </ul>
                      </li>} */}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          {/* End Navbar Area */}
        </>
      </>
    </div>
  );
}
