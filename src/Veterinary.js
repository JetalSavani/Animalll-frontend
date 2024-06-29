import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from './BaseUrl/BaseUrl';
import { toast } from 'react-toastify';
export default function Veterinary() {
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
        if (v?.type === "Veterinary") {
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
        {/* Start About Area */}
        <section className="about-area ptb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-image">
                  <img src="assets/img/banner.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <span>Veterinary Service</span>
                  <h2>We have 15 years of experience</h2>
                  <p>
                    Advanced General Practice Offering Comprehensive Dentistry, Urgent Care Services, Geriatric and Preventative Medicine Utilizing State of The Art Diagnostic Imaging and Laboratory Services.
                  </p>
                  <ul>
                    <li>
                      <i className="icofont-check-circled" /> Wellness and Preventative Medicine
                    </li>

                    <li>
                      <i className="icofont-check-circled" /> Urgent Care
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> 24hr resident veterinary
                      care
                    </li>
                    <li>
                      <i className="icofont-check-circled" />General Surgery
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> Quarantine and isolation
                      facilities
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> Diagnostic and Internal Medicine
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> Nutritional Counseling
                    </li>
                    <li>
                      <i className="icofont-check-circled" /> On-site veterinary
                      hospital with neo-natal intensive care unit
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>

        </section>
        {/* End About Area */}



        {/* Start Team Wrap Area */}
        <div className="team-wrap-area pt-100 pb-70">
          <div className="container">


            <div className="section-title with-wrap-style"> <br /> <br />
              <span>OUR Veterinary'S TEAM</span>

            </div>

            <div className="row justify-content-center">
              {data?.map((v) => {
                return (
                  <div className="col-lg-3 col-sm-6">
                    <div className="team-wrap-card">
                      <div className="team-image">
                        <img src={v?.image} alt="" className='w-100' width={220}
                          height={220}

                          style={{ objectFit: "cover" }} />
                        {/* <ul className="team-social">
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#" target="_blank">
                          <i className="icofont-linkedin" />
                        </Link>
                      </li>
                    </ul> */}
                      </div>
                      <div className="team-content">
                        <h3>{v?.data?.doctor_name}</h3>
                        {/* <span>Professional Trainer</span> */}
                        <h6

                        > <br />
                          Slot-Timing : {v?.data?.slot}
                        </h6>
                        <p>
                          {v?.data?.Doctor_description}
                        </p>
                        <button className='btn btn-success' onClick={() => sendMail(v?._id)}> Hire Me</button>
                      </div>
                    </div>
                  </div>
                )
              })}


            </div>
          </div>
        </div>
        {/* End Team Wrap Area */}
      </>





    </div>
  )
}
