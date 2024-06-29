import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { baseUrl } from './BaseUrl/BaseUrl'
import { toast } from 'react-toastify'

export default function Transportation() {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
  }
  const [data, setData] = useState([])

  const getProduct = async () => {
    let data = []
    await axios.get(baseUrl + "service/get-service", config).then((res) => {
      console.log('res', res)
      data = res?.data?.service?.filter((v) => {
        if (v?.type === "Transportation") {
          return v
        }
      })
      setData(data)
    }).catch((err) => {
      console.log('err', err)
    })
  }
  const sendMail = (id) => {
    axios.get(baseUrl + `service/hireService?id=${id}`, config).then((res) => {
      console.log('res', res)
      toast.success(res?.data?.message)
    }).catch((err) => {
      toast.error(err?.response?.data.message)
    })
  }
  useEffect(() => {
    getProduct()
  }, [])
  // const getService = async () => {
  //   await ApiGet("/service/get-service")
  //     .then((res) => {
  //       console.log("res?.data?.data?.response", res?.data?.data);
  //       setData(res?.data?.service);
  //       // setCountryData(res?.data?.data?.response);
  //     })
  //     .catch((err) => ErrorToast(err?.message));
  // };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>

      <>






        <>
          {/* Start EC About Area */}
          <div className="ec-about-area pb-100">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="ec-about-image">
                    <img src="assets/img/t.jpg" alt="image" style={{ height: "500px" }} />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="ec-about-content">
                    <span>ANIMALLL FARM WITH TRANSPORTATION SERVICE</span>
                    <h3>
                      We Have 15 Years Of Experience In Animals Transportation
                    </h3>
                    <p>
                      We can make on-time deliveries anywhere with complete and precise traceability, in close communication with our customers.

                    </p>
                    <ul className="list">
                      <li>
                        <i className="icofont-checked" /> The fastest delivery
                      </li>
                      <li>
                        <i className="icofont-checked" /> Collect shipment upon request
                      </li>
                      <li>
                        <i className="icofont-checked" /> 24hr wroking time
                      </li>
                      <li>
                        <i className="icofont-checked" /> Cargo insurance
                      </li>
                      <li>
                        <i className="icofont-checked" />  Customer satisfication
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End EC About Area */}
        </>

        {/* Start Features Style Area */}
        <div className="features-style-area pt-100 pb-70">
          <div className="container">
            <div className="section-title with-wrap-style">
              <span>OUR TRANSPORTATION'S TEAM</span>

            </div>
            <div className="row justify-content-center justify-content-between">
              {data?.map((v) => {
                return (
                  <div className="col-lg-3 col-sm-6  mt-10 pt-3"  >
                    <div className="features-style-card"  >
                      <div className="features-image">
                        <a href="#">
                          <img
                            src={v?.image}
                            alt="image"
                            className='w-100'

                            height={600}
                            width={450}
                            style={{ objectFit: "cover" }}
                          />
                        </a>
                      </div>
                      <div className="features-content">
                        <h3>
                          <a href="#">{v?.data?.driver_name}</a>
                        </h3>
                        <h6>
                          Vehicle Type : {v?.data?.vehicleType}
                        </h6>
                        <p>
                          {v?.data?.driverDescription}
                        </p>
                        <a href="#" className="read-more-btn" onClick={() => sendMail(v?._id)} >
                          <i className="icofont-simple-right" /> <span>Book Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}



            </div>
          </div>
        </div>
        {/* End Features Style Area */}

      </>


    </div>
  )
}

