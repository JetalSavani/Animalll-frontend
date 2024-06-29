import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { baseUrl } from './BaseUrl/BaseUrl'
import moment from 'moment'
export default function Blog() {
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

        {/* Start Page Title Area */}
        <div className="page-title-area bg6 jarallax" data-jarallax='{"speed": 0.2}'>
          <div className="container">
            <div className="page-title-content">
              <h1>Blog </h1>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Blog </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Page Title Area */}
        {/* Start Blog Details Area */}


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
              {data?.map((v) => {
                return (<div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="single-blog-post">
                    <div className="post-image">
                      <Link to="#">
                        <img src={v?.image} alt="" className='w-100' style={{ height: "220px", width: "100%" }} />
                      </Link>
                      <div className="author">
                        <Link to="#">{v?.author}</Link>
                      </div>
                    </div>
                    <div className="post-content">
                      <span>{moment(v?.createdAt).format('LL')}</span>
                      <h3>
                        <Link to="#">
                          {v?.title.substring(0, 50) + '...'}
                        </Link>
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

              })}
              {/* <div className="col-lg-3 col-md-3 col-sm-6 col-12">
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
                      Read More 
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
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
        {/* End Blog Details Area */}
      </>



    </div>
  )
}
