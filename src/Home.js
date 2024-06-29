import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import HomeBanner from "./Home/HomeBanner";
import { baseUrl } from "./BaseUrl/BaseUrl";
import axios from "axios";
import moment from "moment";

export default function Home() {

  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
  }
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const getProduct = async () => {
    await axios.get(baseUrl + "blog/get-blog", config).then((res) => {
      console.log('res', res)
      setData(res?.data?.blog)
    }).catch((err) => {
      console.log('err', err)
    })
  }
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    getProduct()
  }, [])
  return (
    <div>
      <>
        {/* Start Main Banner */}
        <HomeBanner />
        {/* End Main Banner */}

        {/* Start About Area */}
        <section className="about-area ptb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                {/* <div className="about-image">
                  <img src="assets/img/about-img3.jpg" alt="image" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <span>About Us</span>
                  <h2>We have 37 years of experience</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="icofont-check-circled" /> Year round night
                      staff
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> World-class
                      farriery team
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> Complete fostering
                      service
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> 24hr resident
                      veterinary care
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> Own fleet of
                      equine transport
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> Quarantine and
                      isolation facilities
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> Full time and stud
                      season boarders
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> 4 purpose-built
                      foaling units encompassing 24hr supervision
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> On-site veterinary
                      hospital with neo-natal intensive care unit
                    </li>
                  </ul>
                  <Link to="#" className="btn btn-primary">
                    More About Us <i className="icofont-simple-right" />
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="section-title">
              <span className="home-text fs-18">Shop</span>
              <h2>Our Products</h2>
            </div>
            {/* <div className="section-title">
            <h4>Our <span style={{fontSize:"30px", textAlign:"center"}}>Products</span></h4>
            </div> */}
            <div className="about-inner-area">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="single-about-inner">
                    <div className="image">
                      <img src="assets/img/buffalo_main.jpg" alt="" />
                      {/* <div className="icon">
                        <i className="icofont-farmer-alt" />
                      </div> */}
                    </div>
                    <div className="content">
                      <h3>Buffalo</h3>
                      <p> A buffalo is an Herbivorous animal.</p>
                      <Link to="/buffalo" className="btn btn-primary">
                        See More <i className="icofont-simple-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-about-inner">
                    <div className="image">
                      <img src="assets/img/cow_main.jpg" alt="" />
                      {/* <div className="icon">
                        <i className="icofont-cow" />
                      </div> */}
                    </div>
                    <div className="content">
                      <h3>Cow</h3>
                      <p>Everything we do, we do for our cows.</p>
                      <Link to="/cow" className="btn btn-primary">
                        See More <i className="icofont-simple-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-about-inner">
                    <div className="image">
                      <img src="assets/img/ox_main.jpg" alt="" />
                      {/* <div className="icon">
                        <i className="icofont-ui-home" />
                      </div> */}
                    </div>
                    <div className="content">
                      <h3>Ox</h3>
                      <p>An ox is a male offspring of a cow.</p>
                      <Link to="/ox" className="btn btn-primary">
                        See More <i className="icofont-simple-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>
        {/* End About Area */}
        {/* Start Video Area */}
        <section
          className="video-area bg-image ptb-80 jarallax"
          data-jarallax='{"speed": 0.2}'
        >
          <div className="container">
            <div className="video-content">
              <Link
                to="https://youtube.com/watch?v=4ZOO3uex1xA&feature=shares"
                target={"_Blank"}
                className="video-btn popup-youtube"
              >
                <i className="icofont-play" />
              </Link>
              <h3>
                To provide quality minded customers with reasonably priced
              </h3>
            </div>
          </div>
        </section>
        {/* End Video Area */}
        {/* Start Gallery Area */}
        <section className="gallery-area ptb-80 pb-0">
          <div className="container">
            <div className="section-title">
              <span>Gallery</span>
              <h2>See Our Gallery</h2>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="photo-gallery-item">
                <img src="assets/img/gallery-img8.jpg" alt="" />
                <i className="icofont-plus" />
                <Link to="assets/img/gallery-img8.jpg" className="popup-btn" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 p-0">
              <div className="row m-0">
                <div className="col-lg-6 col-sm-6 col-md-6 p-0">
                  <div className="photo-gallery-item">
                    <img src="assets/img/gallery-img9.jpg" alt="" />
                    <i className="icofont-plus" />
                    <Link
                      to="assets/img/gallery-img9.jpg"
                      className="popup-btn"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 p-0">
                  <div className="photo-gallery-item">
                    <img src="assets/img/gallery-img10.jpg" alt="" />
                    <i className="icofont-plus" />
                    <Link
                      to="assets/img/gallery-img10.jpg"
                      className="popup-btn"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12 col-md-12 p-0">
                  <div className="photo-gallery-item">
                    <img src="assets/img/gallery-img11.jpg" alt="" />
                    <i className="icofont-plus" />
                    <Link
                      to="assets/img/gallery-img11.jpg"
                      className="popup-btn"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 p-0">
              <div className="photo-gallery-item">
                <img src="assets/img/gallery-img12.jpg" alt="" />
                <i className="icofont-plus" />
                <Link to="assets/img/gallery-img12.jpg" className="popup-btn" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
              <div className="photo-gallery-item">
                <img src="assets/img/gallery-img13.jpg" alt="" />
                <i className="icofont-plus" />
                <Link to="assets/img/gallery-img13.jpg" className="popup-btn" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
              <div className="photo-gallery-item">
                <img src="assets/img/gallery-img14.jpg" alt="" />
                <i className="icofont-plus" />
                <Link to="assets/img/gallery-img14.jpg" className="popup-btn" />
              </div>
            </div>
          </div>
        </section>
        {/* End Gallery Area */}

        {/* Start Products Area */}
        {/* <section className="products-area ptb-80">
          <div className="container">
            <div className="section-title">
              <span>Shop</span>
              <h2>Our Products</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="row">
              <div className="products-slides owl-carousel owl-theme">
                <div className="col-lg-12 col-md-12">
                  <div className="single-products">
                    <div className="products-image">
                      <img src="/public/assets/img/shop1.jpg" alt="image" />
                      <ul>
                        <li>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#productsModalCenter"
                          >
                            <i className="icofont-search-1" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="icofont-link" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="products-content">
                      <h3>
                        <Link to="#">Pecorino Romano</Link>
                      </h3>
                      <span>$191.00</span>
                      <Link to="#" className="add-to-cart-btn">
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="single-products">
                    <div className="products-image">
                      <img src="assets/img/shop2.jpg" alt="image" />
                      <ul>
                        <li>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#productsModalCenter"
                          >
                            <i className="icofont-search-1" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="icofont-link" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="products-content">
                      <h3>
                        <Link to="#">Evaporated Milk</Link>
                      </h3>
                      <span>$111.00</span>
                      <Link to="#" className="add-to-cart-btn">
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="single-products">
                    <div className="products-image">
                      <img src="assets/img/shop3.jpg" alt="image" />
                      <ul>
                        <li>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#productsModalCenter"
                          >
                            <i className="icofont-search-1" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="icofont-link" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="products-content">
                      <h3>
                        <Link to="#">Farm Sour Cream</Link>
                      </h3>
                      <span>$121.00</span>
                      <Link to="#" className="add-to-cart-btn">
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="single-products">
                    <div className="products-image">
                      <img src="assets/img/shop4.jpg" alt="image" />
                      <ul>
                        <li>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#productsModalCenter"
                          >
                            <i className="icofont-search-1" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="icofont-link" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="products-content">
                      <h3>
                        <Link to="#">Ricotta Salata</Link>
                      </h3>
                      <span>$150.00</span>
                      <Link to="#" className="add-to-cart-btn">
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="products-area ptb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-products">
                  <div className="products-image">
                    <img src="assets/img/shop1.jpg" alt="image" />
                    <ul>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#productsModalCenter"
                        >
                          <i className="icofont-search-1" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-link" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="products-content">
                    <h3>
                      <Link to="#">Pecorino Romano</Link>
                    </h3>
                    <span>$191.00</span>
                    <Link to="#" className="add-to-cart-btn">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-products">
                  <div className="products-image">
                    <img src="assets/img/shop2.jpg" alt="image" />
                    <ul>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#productsModalCenter"
                        >
                          <i className="icofont-search-1" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-link" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="products-content">
                    <h3>
                      <Link to="#">Evaporated Milk</Link>
                    </h3>
                    <span>$111.00</span>
                    <Link to="#" className="add-to-cart-btn">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-products">
                  <div className="products-image">
                    <img src="assets/img/shop3.jpg" alt="image" />
                    <ul>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#productsModalCenter"
                        >
                          <i className="icofont-search-1" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-link" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="products-content">
                    <h3>
                      <Link to="#">Farm Sour Cream</Link>
                    </h3>
                    <span>$121.00</span>
                    <Link to="#" className="add-to-cart-btn">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-products">
                  <div className="products-image">
                    <img src="assets/img/shop4.jpg" alt="image" />
                    <ul>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#productsModalCenter"
                        >
                          <i className="icofont-search-1" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-link" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="products-content">
                    <h3>
                      <Link to="#">Ricotta Salata</Link>
                    </h3>
                    <span>$150.00</span>
                    <Link to="#" className="add-to-cart-btn">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-products">
                  <div className="products-image">
                    <img src="assets/img/shop1.jpg" alt="image" />
                    <ul>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#productsModalCenter"
                        >
                          <i className="icofont-search-1" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-link" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="products-content">
                    <h3>
                      <Link to="#">Pecorino Romano</Link>
                    </h3>
                    <span>$191.00</span>
                    <Link to="#" className="add-to-cart-btn">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-products">
                  <div className="products-image">
                    <img src="assets/img/shop2.jpg" alt="image" />
                    <ul>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#productsModalCenter"
                        >
                          <i className="icofont-search-1" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="icofont-link" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="products-content">
                    <h3>
                      <Link to="#">Evaporated Milk</Link>
                    </h3>
                    <span>$111.00</span>
                    <Link to="#" className="add-to-cart-btn">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="pagination-area">
                  <Link to="#" className="prev page-numbers">
                    <i className="icofont-double-left" />
                  </Link>
                  <Link to="#" className="page-numbers">
                    1
                  </Link>
                  <span className="page-numbers current" aria-current="page">
                    2
                  </span>
                  <Link to="#" className="page-numbers">
                    3
                  </Link>
                  <Link to="#" className="page-numbers">
                    4
                  </Link>
                  <Link to="#" className="next page-numbers">
                    <i className="icofont-double-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* End Products Area */}
        {/* Start Products Modal */}
        {/* <div
          className="modal productsQuickView fade"
          id="productsModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="productsModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="products-image">
                    <img src="assets/img/shop1.jpg" alt="image" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="products-content">
                    <h3>Evaporated Milk</h3>
                    <div className="price">
                      <span>$200.00</span> $191.00
                    </div>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Vestibulum tortor quam,
                      feugiat vitae, ultricies eget, tempor sit amet, ante.
                      Donec eu libero sit amet quam egestas semper. Aenean
                      ultricies mi vitae est. Mauris placerat eleifend leo.
                    </p>
                    <form>
                      <div className="quantity">
                        <input
                          type="number"
                          name="quantity"
                          id="quantity"
                          min={1}
                          defaultValue={1}
                          title="Qty"
                        />
                      </div>
                      <button type="submit">Add to Cart</button>
                    </form>
                    <div className="product-meta">
                      <span>
                        Category: <Link to="#">Pencil</Link>
                      </span>
                      <span>
                        Tag: <Link to="#">Prints</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Produts Modal */}

        {/* Start Blog Area */}
        <section className="blog-area ptb-80">
          <div className="container">
            <div className="section-title">
              <span>Our Blog</span>
              <h2>
                Recent News &amp;
                Articles
              </h2>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
            </div>
            <div className="row">
              {data?.map((v, i) => {
                if (i <= 2) {
                  return (<div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="single-blog-post">
                      <div className="post-image">
                        <Link to="#">
                          <img src={v?.image} alt="" className="w-100" style={{ height: "300px" }} />
                        </Link>
                        <div className="author">
                          <Link to="#">{v?.author}</Link>
                        </div>
                      </div>
                      <div className="post-content">
                        <span>{moment(v?.createdAt).format('LL')}</span>
                        <h3>

                          {v?.title.substring(0, 50) + '...'}
                          {/* {v?.title} */}

                        </h3>
                        <p>
                          {v?.desc.substring(0, 100) + '...'}
                        </p>
                        <Link to={`/singleblog/${v?._id}`} className="read-more">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>)

                }
              })}
              {/* <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="post-image">
                    <Link to="#">
                      <img src="assets/img/blog5.jpg" alt="" />
                    </Link>
                    <div className="author">
                      <Link to="#">By Admin</Link>
                    </div>
                  </div>
                  <div className="post-content">
                    <span>June 28, 2021</span>
                    <h3>
                      <Link to="#">
                        The world's ten most expensive stallions for 2021
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/blog" className="read-more">
                      Read More <i className="icofont-simple-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="post-image">
                    <Link to="#">
                      <img src="assets/img/blog6.jpg" alt="" />
                    </Link>
                    <div className="author">
                      <Link to="#">By Admin</Link>
                    </div>
                  </div>
                  <div className="post-content">
                    <span>June 28, 2021</span>
                    <h3>
                      <Link to="#">
                        The world's ten most expensive stallions for 2021
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/blog" className="read-more">
                      Read More <i className="icofont-simple-right" />
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* End Blog Area */}




        {/* Start Partner Area */}
        {/* <section
          className="partner-area ptb-80 jarallax"
          data-jarallax='{"speed": 0.2}'
        >
          <div className="container-fluid">
            <div className="row">
              <div className="partner-slides owl-carousel owl-theme">
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#">
                      <img src="assets/img/partner1.png" alt="image" />
                      <img src="assets/img/partner1.png" alt="image" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#">
                      <img src="assets/img/partner2.png" alt="image" />
                      <img src="assets/img/partner2.png" alt="image" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#">
                      <img src="assets/img/partner3.png" alt="image" />
                      <img src="assets/img/partner3.png" alt="image" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#">
                      <img src="assets/img/partner4.png" alt="image" />
                      <img src="assets/img/partner4.png" alt="image" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#">
                      <img src="assets/img/partner5.png" alt="image" />
                      <img src="assets/img/partner5.png" alt="image" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#">
                      <img src="assets/img/partner6.png" alt="image" />
                      <img src="assets/img/partner6.png" alt="image" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="partner-item">
                    <Link to="#">
                      <img src="assets/img/partner7.png" alt="image" />
                      <img src="assets/img/partner7.png" alt="image" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* End Partner Area */}
        {/* Start Feedback Area */}
        {/* <section className="feedback-area extra-pb ptb-80">
          <div className="container">
            <div className="section-title">
              <span>Testimonials</span>
              <h2>
                What customer say <br />
                about us
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="row">
              <div className="feedback-slides owl-carousel owl-theme">
                <div className="col-lg-12 col-md-12">
                  <div className="single-feedback">
                    <img src="assets/img/client1.jpg" alt="image" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                    <div className="client-info">
                      <h3>Jason Statham</h3>
                      <span>Phonix, CTO</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="single-feedback">
                    <img src="assets/img/client2.jpg" alt="image" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                    <div className="client-info">
                      <h3>Jason Smith</h3>
                      <span>Phonix, CTO</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="single-feedback">
                    <img src="assets/img/client3.jpg" alt="image" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                    <div className="client-info">
                      <h3>Salar Taylor</h3>
                      <span>Phonix, CTO</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="single-feedback">
                    <img src="assets/img/client2.jpg" alt="image" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>
                    <div className="client-info">
                      <h3>Jason Smith</h3>
                      <span>Phonix, CTO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        End Feedback Area */}
      </>
    </div>
  );
}
