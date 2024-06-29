import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from './BaseUrl/BaseUrl';


export default function Allproduct() {
  let userData = localStorage.getItem("userData")
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
  }
  const [data, setData] = useState([])
  const [letter, setLetter] = useState('')
  const navigate = useNavigate()
  console.log('data', data)
  const getProduct = async () => {
    let data = []
    if (userData) {
      await axios.get(baseUrl + `product/get-product?letter=${letter === "" ? null : letter}`, config).then((res) => {
        console.log('res', res)
        data = res?.data?.product.filter((v) => {
          if (v?.categoryId?._id === "640f478bd0cf447b327fa6cf") {
            return v
          }
        })
        setData(data)
      }).catch((err) => {
        console.log('err', err)
      })
    } else {
      await axios.get(baseUrl + "product/getUserProduct", config).then((res) => {
        console.log('res', res)
        data = res?.data?.product.filter((v) => {
          if (v?.categoryId?._id === "640f478bd0cf447b327fa6cf") {
            return v
          }
        })
        setData(data)
      }).catch((err) => {
        console.log('err', err)
      })
    }

  }
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  React.useEffect(() => {
    getProduct()
  }, [letter])
  return (
    <>
      <div style={{ position: 'relative' }}>
        <div className="page-title-area bg4 jarallax" data-jarallax='{"speed": 0.2}'>
          <div className="container">
            <div className="page-title-content">
              <h1>Cow</h1>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Cow
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="courses-area">

          <div className="container">

            <div className="section-title with-wrap-style"><br /><br />
              <span>Our Product </span>

            </div>
            <div className='mb-3 d-flex justify-contant-end justify-content-end'>
              <input type="text" class="form-control w-25" placeholder="Search Product" value={letter} onChange={(e) => setLetter(e.target.value)} aria-label="Search Product" aria-describedby="basic-addon2" />
            </div>
            <div className="row justify-content-center">
              {data?.map((val) => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12 card-product">
                    <div className="single-courses">
                      <div className="courses-image">
                        <img src={val?.frontPhoto} alt="" />
                      </div>
                      <div className="courses-content">

                        <div className="d-flex justify-content-between align-items-center" >
                          <h6>{val?.breedType}{" "}{val?.animalType}</h6>
                          <h6 >{val?.price}&#x20b9;</h6>
                        </div>
                        <div className="d-flex justify-content-between align-items-center"  >
                          <h6>{val?.city}{","}{val?.state}</h6>
                          <h6  >Color:  {val?.color}</h6>
                        </div>
                        <div className="d-flex justify-content-between align-items-center"  >
                          <h6>Age: {val?.age}</h6>
                          <h6  >Milk/Day: {val?.milk} L</h6>
                        </div>
                        <button className='btn btn-view' onClick={() => navigate(`/singleproduct/${val?._id}`)} >View Product </button>

                      </div>
                    </div>
                  </div>
                )
              })}

              {/* <div className="col-lg-4 col-md-12">
              <div className="single-courses">
                <div className="courses-image">
                  <img src="assets/img/courses1.jpg" alt="" />
                </div>
                <div className="courses-content">

                  <div className="column" style={{ display: "flex" }} >
                    <h6>Cow</h6>
                    <h6 style={{ marginLeft: "220px" }} >Price</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>location</h6>
                    <h6 style={{ marginLeft: "193px" }} >color</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>Age</h6>
                    <h6 style={{ marginLeft: "223px" }} >Milk</h6>
                  </div>




                  <button className='btn btn-success' style={{ marginLeft: "25%" }}  >View Product </button>

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="single-courses">
                <div className="courses-image">
                  <img src="assets/img/courses1.jpg" alt="" />
                </div>
                <div className="courses-content">

                  <div className="column" style={{ display: "flex" }} >
                    <h6>Cow</h6>
                    <h6 style={{ marginLeft: "220px" }} >Price</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>location</h6>
                    <h6 style={{ marginLeft: "193px" }} >color</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>Age</h6>
                    <h6 style={{ marginLeft: "223px" }} >Milk</h6>
                  </div>
                  <button className='btn btn-success' style={{ marginLeft: "25%" }}  >View Product </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="single-courses">
                <div className="courses-image">
                  <img src="assets/img/courses1.jpg" alt="" />
                </div>
                <div className="courses-content">

                  <div className="column" style={{ display: "flex" }} >
                    <h6>Cow</h6>
                    <h6 style={{ marginLeft: "220px" }} >Price</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>location</h6>
                    <h6 style={{ marginLeft: "193px" }} >color</h6>
                  </div>
                  <div className="column" style={{ display: "flex" }} >
                    <h6>Age</h6>
                    <h6 style={{ marginLeft: "223px" }} >Milk</h6>
                  </div>


                  <button className='btn btn-success' style={{ marginLeft: "25%" }}    >View Product </button>

                </div>
              </div>
            </div> */}


            </div>
          </div>

        </section>
        {/* <div class="input-group search-bar">
          <input type="text" class="form-control" placeholder="Search Cow" aria-label="Search Cow" aria-describedby="basic-addon2" />
          <div class="input-group-append">
            <span class="input-group-text btn btn-primary" id="basic-addon2">Search</span>
          </div>
        </div> */}
      </div>
    </>
  )
}
