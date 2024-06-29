import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { baseUrl } from "./BaseUrl/BaseUrl";
import axios from "axios";

export default function Login() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [credetials, setCredetials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState(false)
  function updateData(e) {
    setCredetials({ ...credetials, [e.target.name]: e.target.value });
  }
  console.log(credetials);

  // async function loginHandler(event) {
  //   if (credetials.email === "") {
  //     toast.error("please enter email", { position: "top-right" });
  //   } else if (credetials.password === "") {
  //     toast.error("please enter password", { position: "top-right" });
  //   } else {
  //     const configOptions = {
  //       method: "POST",
  //       body: JSON.stringify(credetials),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const response = await fetch(
  //       "http://localhost:8000/login",
  //       configOptions
  //     );
  //     const result = await response.json();
  //     if (result.status == 1) {
  //       toast.success(result.message);
  //       navigate("/");
  //     }
  //     else{
  //       toast.error(result.message)
  //     }
  //   }
  // }

  const loginHandler = async () => {
    if (credetials?.email && credetials?.password) {
      await axios.post(baseUrl + "users/login", credetials).then((res) => {
        console.log('res', res)
        if (res?.data?.success === true) {
          localStorage.setItem("token", res?.data?.token)
          localStorage.setItem("userData", JSON.stringify(res?.data?.user))
          setCredetials({
            email: "", password: ""
          })
          setErrMsg(false)
          toast.success(res?.data.message)
          navigate("/")
        } else {
          toast.error(res?.data.message)
        }

      }).catch((err) => {
        console.log('err', err)
        toast.error(err?.response?.data.message)
      })
    } else {
      setErrMsg(true)
    }
  }

  return (
    <div>
      <section className="login-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="login-form">
              <h3>
                Log In
              </h3>
              {/* <div className="row">
                <div className="col-lg-4">
                  <a href="#" className="facebook">
                    Facebook
                  </a>
                </div>
                <div className="col-lg-4">
                  <a href="#" className="google">
                    Google
                  </a>
                </div>
                <div className="col-lg-4">
                  <a href="#" className="twitter">
                    Twitter
                  </a>
                </div>
              </div> */}
              {/* <div className="login-or">
                <hr />
              </div> */}
              <form>
                <div className="form-group">
                  <label htmlFor="username">
                    <i className="icofont-ui-user" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={credetials?.email}
                    onChange={(e) => {
                      updateData(e);
                    }}
                  />
                  {errMsg && !credetials?.email && <div className="text-danger text-start mt-2">Email is required!</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="icofont-lock" />
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={credetials?.password}
                    onChange={(e) => {
                      updateData(e);
                    }}
                  />
                  {errMsg && !credetials?.password && <div className="text-danger text-start mt-2">Password is required!</div>}
                </div>

                <div className="form-group">
                  {/* <label className="remember-me">
                    <input type="checkbox" />
                    Remember Me
                  </label> */}
                  <Link to="/forgetpassword" className="forgot-password">
                    Forgot your password?
                  </Link>
                </div>

                <button
                  type="button"
                  onClick={(e) => loginHandler(e)}
                  className="btn btn-primary"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
