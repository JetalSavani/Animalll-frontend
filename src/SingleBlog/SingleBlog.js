import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { baseUrl } from '../BaseUrl/BaseUrl'
import moment from 'moment'
import { BsFillHeartFill } from "react-icons/bs"
export default function Singleblog() {
    const pathName = window.location.pathname
    console.log('pathName', pathName)
    let config = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    }
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const [like, setLike] = useState(false)
    console.log('data', data)
    const getProduct = async () => {
        let blog = []
        await axios.get(baseUrl + "blog/get-blog", config).then((res) => {
            console.log('res', res)
            blog = res?.data?.blog.filter((v) => {
                if (v?._id === pathName.split('/')[2])
                    return v
            })
            setData(blog[0])
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
                <>
                    {/* Start Page Title Area */}
                    <div className="page-title-area bg6 jarallax" data-jarallax='{"speed": 0.2}'>
                        <div className="container">
                            <div className="page-title-content">
                                <h1>Blog</h1>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>FullBlog</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End Page Title Area */}
                    {/* Start Blog Details Area */}
                    <section className="blog-details-area ptb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12" style={{ marginLeft: "220px" }}>
                                    <div className="blog-details">
                                        <div className="article-header">
                                            <ul className="entry-meta">
                                                <li>
                                                    <i className="icofont-user" /> <Link to="#">Animalll</Link>
                                                </li>
                                                <li>
                                                    <i className="icofont-calendar" /> {moment(data?.createdAt).format('LLL')}
                                                </li>


                                            </ul>
                                            <h3>{data?.title}</h3>
                                        </div>
                                        <div className="article-img">
                                            <img src={data?.image} alt="" style={{ width: "100%", height: "600px" }} />
                                        </div>
                                        <div className="article-content">
                                            <h3>  Author : {data?.author}</h3>
                                            {/* <ul className="category">
                                                <li>
                                                    <span>Tags:</span>
                                                </li>
                                                <li>
                                                    <Link to="#">Business</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">IT</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Tips</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Design</Link>
                                                </li>
                                            </ul> */}
                                        </div>
                                        <div className="article-content">
                                            {data?.desc}
                                            <div className='mt-4'>
                                                {
                                                    like ? <div className='d-flex'><BsFillHeartFill color='red' onClick={() => setLike(false)} /> <span className='ms-2'>You Liked</span> </div> : <div className='d-flex'><BsFillHeartFill onClick={() => setLike(true)} /> <span className='ms-2'>Like</span></div>
                                                }
                                            </div>
                                            <div className="products-details text-start mt-4">
                                                <form>

                                                    <button type="btn btn-dark" onClick={() => navigate("/blog")}>Back</button>
                                                </form>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Blog Details Area */}
                </>

            </>


        </div>
    )
}

