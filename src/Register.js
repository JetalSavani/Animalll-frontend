import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import { baseUrl } from "./BaseUrl/BaseUrl";

export default function Register() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    c_password: "",
    phone: null,
  });
  const [errMsg, setErrMsg] = useState(false)
  const [valid, setValid] = useState(false)

  function onChangeHandler(e) {
    if (e.target.name === "password") {

      setFormData({ ...formData, [e.target.name]: e.target.value });
      setValid(validatePassword(e.target.value))
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });

    }
  }
  function validatePassword(password) {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  }
  console.log(formData);

  // async function onClickHandler(e) {
  //   let email_pattern =
  //     /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   // let password_pattern =
  //   //   /^(?=.*[A-Z])(?=.*[1@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$/;
  //   let number_pattern = /^\d{10}$/;

  //   if (formData.name === "") {
  //     toast.error("please enter name !", { position: "top-center" });
  //   }
  //   //email
  //   else if (email_pattern.test(formData.email) === false) {
  //     toast.error("please enter valid email", { position: "top-center" });
  //   }
  //   //Mobile Number
  //   else if (
  //     formData.phone === "" ||
  //     number_pattern.test(formData.phone) === false
  //   ) {
  //     toast.error("mobile number must have 10 digit.", {
  //       position: "top-center",
  //     });
  //   } else if (
  //     formData.password === "" ||
  //     formData.c_password === "" ||
  //     formData.password !== formData.c_password
  //   ) {
  //     toast.error("password not matched !", { position: "top-center" });
  //   } else {
  //     console.log("called btn");
  //     const configOptions = {
  //       method: "POST",
  //       body: JSON.stringify(formData),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const response = await fetch(
  //       "http://localhost:8000/insert-user",
  //       configOptions
  //     );
  //     const result = await response.json();
  //     if ((result.status = 1)) {
  //       toast.success("Register Successfully !");
  //       navigate("/login");
  //     }
  //   }
  //   alert('form submitted');
  //   e.preventDefault();
  //   setFormData('');

  // }

  const onClickHandler = async () => {
    if (valid) {
      if (formData?.phone) {
        if (!(formData?.phone.match('[0-9]{10}'))) {
          toast.error('Please enter valid phone number');
        }
        else {
          if (formData?.name && formData?.email && formData?.password && formData?.c_password) {
            if (formData?.password === formData?.c_password) {
              let body = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                phone: formData.phone,
              }
              await axios.post(baseUrl + "users/create-user", body).then((res) => {
                console.log('res', res)
                setFormData({
                  name: "",
                  email: "",
                  password: "",
                  c_password: "",
                  phone: null,
                })
                toast.success(res?.data?.message)
                navigate("/login")
              }).catch((err) => {
                console.log('err', err)
                toast.error(err?.response?.data?.message)
              })
            } else {
              toast.error("Password and Confirm Password does not match!")
            }
          } else {
            setErrMsg(true)
            console.log('first')
          }
        }
      } else {
        if (formData?.name && formData?.email && formData?.password && formData?.c_password) {
          if (formData?.password === formData?.c_password) {
            let body = {
              name: formData.name,
              email: formData.email,
              password: formData.password,
              phone: formData.phone,
            }
            await axios.post(baseUrl + "users/create-user", body).then((res) => {
              console.log('res', res)
              setFormData({
                name: "",
                email: "",
                password: "",
                c_password: "",
                phone: null,
              })
              toast.success(res?.data?.message)
              navigate("/login")
            }).catch((err) => {
              console.log('err', err)
              toast.error(err?.response?.data?.message)
            })
          } else {
            toast.error("Password and Confirm Password does not match!")
          }
        } else {
          setErrMsg(true)
          console.log('first')
        }
      }
    } else {
      toast.error('Password must contain at least one uppercase letter, 8 charcater required ,one number, and one special character')
    }

  }



  return (
    <div>
      <>
        {/* Start Page Title Area */}
        <div
          className="page-title-area bg4 jarallax"
          data-jarallax='{"speed": 0.2}'
        >
          <div className="container">
            <div className="page-title-content">
              <h1>Register</h1>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Page Title Area */}
        {/* Start Checkout Area */}
        <section className="checkout-area ptb-80 back-img">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="user-actions">
                  <i className="icofont-login" />
                  <span>
                    Returning customer? <Link to="/login">Click here to login</Link>
                  </span>
                </div>
              </div>
            </div>
            <form>
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-12">
                  <div className="billing-details">
                    <h3 className="title">Register Details</h3>
                    <div className="row">
                      <div className="col-lg-12 col-md-12"></div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>
                            Name <span className="required">*</span>
                          </label>
                          <input
                            // pattern="[a-zA-Z'-'\s]*"
                            required
                            type="text"
                            onChange={(e) => onChangeHandler(e)}
                            name="name"
                            className="form-control"
                          />
                          {errMsg && !formData?.name && <div className="text-danger mt-2">Name is required!</div>}
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>
                            E-mail <span className="required">*</span>
                          </label>
                          <input
                            required
                            type="email"
                            onChange={(e) => onChangeHandler(e)}
                            name="email"
                            className="form-control"
                          />
                          {errMsg && !formData?.email && <div className="text-danger mt-2">Email is required!</div>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Password <span className="required">*</span></label>
                          <input
                            required
                            type="password"
                            onChange={(e) => onChangeHandler(e)}
                            name="password"
                            className="form-control"
                          />
                          {errMsg && !formData?.password && <div className="text-danger mt-2">Password is required!</div>}
                          {!valid && formData?.password && <div className="text-danger mt-2">Invalid Password!</div>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Confirm Password <span className="required">*</span>
                          </label>
                          <input
                            required
                            type="password"
                            onChange={(e) => onChangeHandler(e)}
                            name="c_password"
                            className="form-control"
                          />
                          {errMsg && !formData?.c_password && <div className="text-danger mt-2">Confirm Password is required!</div>}
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label>
                            Phone
                          </label>
                          <input
                            required
                            pattern="[6789][0-9]{9}"
                            type="text"
                            onChange={(e) => onChangeHandler(e)}
                            name="phone"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="button"
                          onClick={onClickHandler}
                          class="w-100 btn btn-primary"
                        >
                          Submit
                        </button>
                      </div>
                      {/* <div className="col-lg-12 col-md-12">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="create-an-account"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="create-an-account"
                          >
                            Create an account?
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="ship-different-address"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="ship-different-address"
                          >
                            Ship to a different address?
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            name="notes"
                            id="notes"
                            cols={30}
                            rows={4}
                            placeholder="Order Notes"
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </>
    </div>
  );
}
