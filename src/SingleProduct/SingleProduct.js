import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../BaseUrl/BaseUrl';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

export default function Singleproduct() {
    const pathName = window.location.pathname
    const navigate = useNavigate()
    let config = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    }
    const [data, setData] = useState({})
    const getProduct = async () => {
        let data = []
        await axios.get(baseUrl + "product/get-product", config).then((res) => {
            console.log('res', res)
            data = res?.data?.product.filter((v) => {
                if (v?._id === pathName.split("/")[2]) {
                    return v
                }
            })
            setData(data[0])
        }).catch((err) => {
            console.log('err', err)
        })
    }
    let json = {
        name: data?.breedType + data?.animalType,
        quntity: 1,
        price: data?.price,
        image: data?.frontPhoto,
        id: data?._id
    }
    const [dataPayment, setDataPayement] = useState(json)

    const handleSubmit = (e) => {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }
        e.preventDefault()
        console.log('data', data)
        axios.post(baseUrl + "product/buy-product", json, config).then((res) => {
            console.log('res', res)
            if (res?.data?.data) {
                window.open(res?.data?.data)
            }
        }).catch((err) => {
            console.log('err', err)
        })
    }
    useEffect(() => {
        getProduct()
    }, [])
    console.log('data', data)
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <>
            {/* Start Page Title Area */}
            <div className="page-title-area bg4 jarallax" data-jarallax='{"speed": 0.2}'>
                <div className="container">
                    <div className="page-title-content">
                        <h1>Products Details</h1>
                        <ul>
                            <li>
                                <Link to="#">Home</Link>
                            </li>
                            <li>Products</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* End Page Title Area */}
            {/* Start Products Details Area */}
            <section className="products-details-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="products-image-slides owl-carousel owl-theme">
                                <div className="products-details-image">
                                    <img src={data?.frontPhoto} alt="" />
                                </div>
                                <div className="products-details-image">
                                    <img src={data?.backPhoto} alt="" />
                                </div>
                            </div>
                            <Swiper
                                // slidesPerView={3}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide onClick={() => window?.open(data?.frontPhoto, "_Blank")}>
                                    <img src={data?.frontPhoto} alt="frontphoot" style={{ height: "600px" }} />
                                </SwiperSlide>
                                <SwiperSlide onClick={() => window?.open(data?.backPhoto, "_Blank")}>
                                    <img src={data?.backPhoto} alt="instructor" style={{ height: "600px" }} />
                                </SwiperSlide>
                                <SwiperSlide onClick={() => window?.open(data?.lumpiCertificate, "_Blank")}>
                                    <img src={data?.lumpiCertificate} alt="instructor" style={{ height: "600px" }} />
                                </SwiperSlide>
                                <SwiperSlide onClick={() => window?.open(data?.generalReport, "_Blank")}>
                                    <img src={data?.generalReport} alt="instructor" style={{ height: "600px" }} />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="col-lg-7">
                            <div className="products-details">
                                <h3>{data?.breedType} {data?.animalType} </h3>

                                <br />

                                <h5>&#8377;{data?.price}</h5>
                                <div className="price">

                                </div>
                                <p>
                                    {data?.desc}
                                </p>

                                <form>

                                    <button type="button" onClick={handleSubmit}>Buy Now</button>

                                </form>


                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="products-details-tabs">
                                <ul id="tabs">
                                    {/* <li className="inactive" id="tab_1">
                                        Description
                                    </li> */}
                                    <li className="active" id="tab_2">
                                        Additional Information
                                    </li>

                                </ul>
                                <div className="content " id="tab_1_content">
                                    <div className="products-description">
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry’s
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type
                                            specimen book. It has survived not only five centuries, but
                                            also the leap into electronic typesetting, remaining
                                            essentially unchanged. Lorem Ipsum is simply dummy text of the
                                            printing.
                                        </p>
                                    </div>
                                </div>
                                <div className="content show " id="tab_2_content">
                                    <div className="products-description "  >
                                        <ul className="additional-information">
                                            <li>
                                                <span>Seller mobile number</span> {data?.phone || "-"}
                                            </li>
                                            <li>
                                                <span>Color</span> {data?.color || "-"}
                                            </li>
                                            <li>
                                                <span>Milk &nbsp; (Liter/Day)</span>{data?.milk || "-"}
                                            </li>
                                            <li>
                                                <span>Age</span> {data?.age || "-"}
                                            </li>
                                            <li>
                                                <span>Weight</span> {data?.weight || "-"} kg
                                            </li>
                                            <li>
                                                <span>Lactation</span> {data?.lactation || "-"}
                                            </li>
                                            <li>
                                                <span>Calf age (years) </span> {data?.calfAge || "-"}
                                            </li>
                                            <li>
                                                <span>Calf gender</span> {data?.calfGender || "-"}
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="products-details text-start mt-4">
                                    <form>

                                        <button type="btn btn-dark" onClick={() => navigate("/allproduct")}>Back</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Products Details Area */}
        </>
    )
}
