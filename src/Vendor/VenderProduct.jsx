import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "../BaseUrl/BaseUrl";
import Card from "../card/Card";
import Swal from "sweetalert2";
import { AiOutlineEdit, AiTwotoneDelete } from "react-icons/ai";

export default function VendorAllproduct() {
  let userData = JSON.parse(localStorage.getItem("userData"));
  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [count, setCount] = useState({});
  const [status, setStatus] = useState("Approved");
  const getProduct = async () => {
    await axios
      .get(
        baseUrl + `product/get-product?id=${userData?._id}&status=${status}`,
        config
      )
      .then((res) => {
        console.log("res", res);
        setData(res?.data?.product);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const onDelete = (id) => {
    axios
      .delete(baseUrl + `product/delete-product?id=${id}`, config)
      .then((res) => {
        console.log("res", res);
        getProduct();
        getCount();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const getCount = () => {
    axios
      .get(baseUrl + "product/getProductCounter", config)
      .then((res) => {
        console.log("res", res);
        setCount(res?.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  useEffect(() => {
    getProduct();
    getCount();
  }, [status]);
  return (
    <>
      <div
        className="page-title-area bg4 jarallax"
        data-jarallax='{"speed": 0.2}'
      >
        <div className="container">
          <div className="page-title-content">
            <h1>My Product</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>My Product</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="courses-area mt-5 ">
        <Card count={count} />
        <div className=" dropdown-over">
          <label className=" form-outline mb-2">Status</label>
          <select
            className="form-control mb-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <div className="container">
          <div className="section-title with-wrap-style">
            <br />
            <br />
            <span>My Product </span>
          </div>
          <div className="row justify-content-center">
            {data?.map((val) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                  <div className="single-courses">
                    <div className="courses-image">
                      <img src={val?.frontPhoto} alt="" />
                    </div>
                    <div className="courses-content">
                      <div className="d-flex justify-content-between align-items-center">
                        <h6>
                          {val?.breedType} {val?.animalType}
                        </h6>
                        <h6>{val?.price}&#x20b9;</h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <h6>
                          {val?.city}
                          {","}
                          {val?.state}
                        </h6>
                        <h6>Color: {val?.color}</h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <h6>Age :{val?.age}</h6>
                        <h6>
                          {val?.categoryId?._id !==
                            "64108765023f69996a4a4086" && "Milk/Day:"}{" "}
                          {val?.milk}
                        </h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div
                          className="border rounded p-2"
                          onClick={() =>
                            navigate(`/update-product/${val?._id}`)
                          }
                        >
                          <AiOutlineEdit size={15} />
                        </div>
                        <div
                          className="border rounded p-2"
                          onClick={() => {
                            Swal.fire({
                              text: `Are you sure you want to Delete ?`,
                              icon: "warning",
                              showCancelButton: true,
                              showConfirmButton: true,
                              confirmButtonText: `Yes, Delete`,
                              confirmButtonColor: "#D72852",
                              cancelButtonColor: "transparent",
                              cancelButtonText: "No, Cancel",
                            }).then((res) => {
                              if (res.isConfirmed) {
                                onDelete(val?._id);
                              }
                            });
                          }}
                        >
                          <AiTwotoneDelete style={{ fontSize: "15px" }} />
                        </div>
                      </div>

                      {/* <button
                        className="btn btn-view"
                        // onClick={() =>
                        //   status !== "Approved"
                        //     ? toast.error(
                        //         "when admin approve your product then you can see!"
                        //       )
                        //     : navigate(`/singleproduct/${val?._id}`)
                        // }
                      >
                        My Product{" "}
                      </button> */}
                    </div>
                  </div>
                </div>
              );
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


                  <button className='btn btn-success' style={{ marginLeft: "25%" }}    >View Product </button>

                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
