import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "./BaseUrl/BaseUrl";
import { toast } from "react-toastify";

export default function Animalaccessories() {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }
  }
  const [data, setData] = useState([])
  const [single, setSingle] = useState([])


  const getProduct = async () => {
    let data = []
    await axios.get(baseUrl + "service/get-service", config).then((res) => {
      console.log('res', res)
      data = res?.data?.service?.filter((v) => {
        if (v?.type === "Accessories") {
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <section className="products-area accessories-blog ptb-80">
        <div className="container">
          <div className="row">
            {data?.map((v) => {
              console.log('v', v)
              console.log('v?.data?.accessory_price', v?.data?.accessory_price)
              return (
                <div className="col-lg-4 col-md-6" >
                  <div className="single-products">
                    <div className="products-image">
                      <img src={v?.image} className="w-100" alt="" />
                      <ul>
                        <li>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#productsModalCenter"
                            onClick={() => setSingle(v)}
                          >
                            <i className="icofont-search-1" />
                          </Link>
                        </li>
                        {/* <li>
                          <Link to="#">
                            <i className="icofont-link" />
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                    <div className="products-content">
                      <h3>
                        <Link to="#">{v?.data?.accessory_name}</Link>
                      </h3>
                      <span>₹{v?.data?.accessory_price}</span>
                      <p> {v?.data?.accessory_description}.</p>

                      <br />
                      <Link to="#" className="add-to-cart-btn" onClick={() => sendMail(v?._id)}>
                        Buy Accessories
                      </Link>

                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </section>
      <div
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
                  <img src={single?.image} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="products-content">
                  <h3>{single?.data?.accessory_name}</h3>
                  <div className="price">
                    ₹{single?.data?.accessory_price}
                  </div>
                  <p>
                    {single?.data?.accessory_description}.
                  </p>
                  <form>
                    {/* <div className="quantity">
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        min={1}
                        defaultValue={1}
                        title="Qty"
                      />
                    </div> */}
                    <button type="submit" onClick={() => sendMail(single?._id)}>Buy Now</button>
                  </form>
                  {/* <div className="product-meta">
                    <span>
                      Category: <Link to="#">Pencil</Link>
                    </span>
                    <span>
                      Tag: <Link to="#">Prints</Link>
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
