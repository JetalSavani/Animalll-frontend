import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { baseUrl } from './BaseUrl/BaseUrl';
import { toast } from 'react-toastify';
export default function Insurance() {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
  }
  const [data, setData] = useState([])
  console.log('data', data)

  const getProduct = async () => {
    let data = []
    await axios.get(baseUrl + "service/get-service", config).then((res) => {
      console.log('res', res)
      data = res?.data?.service?.filter((v) => {
        if (v?.type === "Insurance") {
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

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>

      <>
        {/* Start Horse Society Area */}
        <div className="horse-society-area pt-100 pb-70">
          <div className="container">
            <div className="section-title with-wrap-style">
              {/* <span>INSURANCE SERVICE</span> */}
              <h2>Protect Your Livestock with Cow Insurance Coverage</h2>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4 col-md-6">
                <div className="horse-society-card">
                  <div className="horse-society-content">
                    <div className="icon-image" >
                      <img
                        src="assets/img/insuranceimage.jpg"
                        alt="icon"
                      />
                    </div>
                    <div className="content">
                      <h3>
                        <a href="#" style={{ padding: "30px 10px" }}>Coverage Options</a>
                      </h3>
                      <p>
                        Choose the coverage options that best fit your needs and budget.
                      </p>

                    </div>
                  </div>
                  <div className="horse-society-content">
                    <div className="icon-image">
                      <img
                        src="assets/img/insuranceimage2.jpg"
                        alt="icon"
                      />
                    </div>
                    <div className="content">
                      <h3>
                        <a href="#" style={{ padding: "30px 10px" }}> Risk management </a>
                      </h3>
                      <p>
                        Cow insurance helps to manage risk for farmers and ranchers.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="horse-society-card">
                  <div className="horse-society-image">
                    <img
                      src="assets/img/insurancemain2.jpg"
                      alt="image"
                      style={{ height: "450px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="horse-society-card">
                  <div className="horse-society-content">
                    <div className="icon-image">
                      <img
                        src="assets/img/insuranceimage3.jpg"
                        alt="icon"
                      />
                    </div>
                    <div className="content">
                      <h3>
                        <a href="#" style={{ padding: "30px 10px" }}>Protection</a>
                      </h3>
                      <p>
                        Cow insurance protects against unexpected financial losses.
                      </p>

                    </div>
                  </div>
                  <div className="horse-society-content">
                    <div className="icon-image">
                      <img
                        src="assets/img/insuranceimage4.jpg"
                        alt="icon"
                      />
                    </div>
                    <div className="content">
                      <h3>
                        <a href="#" style={{ padding: "30px 10px" }}>Livestock Owners</a>
                      </h3>
                      <p>
                        Protect your livestock and get peace of mind with cow insurance.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Horse Society Area */}
        <div className="blog-wrap-area pt-100 pb-100">
          <div className="container">
            <div className="section-title with-wrap-style">
              <span> OUR INSURANCE PARTNER </span>

            </div>
            <div className="row justify-content-center">
              {data?.map((v) => {
                return (
                  <div className="col-lg-4 col-md-6">
                    <div className="blog-wrap-card">
                      <div className="blog-image">
                        <Link to="single-post-1.html">
                          <img src={v?.image} alt="" className='w-100'
                            width={220}
                            height={220}
                            style={{ objectFit: "cover" }} />
                        </Link>
                      </div>
                      <div className="blog-content">

                        <h3>
                          {v?.data?.company_name}:
                        </h3>
                        <p>
                          {v?.data?.policy_description}            </p>
                        {/* <h6>visiting address : New India Assurance Building, <br />
87 M.G. Road, Fort,<br />
Mumbai - 400001, India</h6> */}
                        <button className='btn btn-primary' onClick={() => sendMail(v?._id)}> Buy Policy</button>
                      </div>
                    </div>
                  </div>
                )
              })}



            </div>
          </div>
        </div>
      </>


    </div>
  )
}
