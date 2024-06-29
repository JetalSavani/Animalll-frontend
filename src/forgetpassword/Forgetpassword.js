import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseUrl } from '../BaseUrl/BaseUrl';

export default function Forgetpassword() {

    const [credetials, setCredetials] = useState({ email: "" });
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState(false)
    function updateData(e) {
        setCredetials({ ...credetials, [e.target.name]: e.target.value });
    }
    console.log(credetials);

    const loginHandler = async () => {
        if (credetials?.email) {
            await axios.post(baseUrl + "users/forgot-password", credetials).then((res) => {
                console.log('res', res)
                localStorage.setItem("email", credetials?.email)
                setCredetials({
                    email: ""
                })
                setErrMsg(false)
                toast.success(res?.data.message)
                navigate("/otppassword")
            }).catch((err) => {
                console.log('err', err)
                toast.error(err?.response?.data.message)
            })
        } else {
            setErrMsg(true)
        }
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <section className="login-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="login-form">
                            <h3>
                                Forget Password
                            </h3>
                            {/* <div className="login-or"> </div> */}

                            <form>
                                <div className="form-group">
                                    <label htmlFor="username">
                                        <i className="icofont-ui-user" />
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter Email"
                                        value={credetials?.email}
                                        onChange={(e) => {
                                            updateData(e);
                                        }}

                                    />
                                    {errMsg && !credetials?.email && <div className="text-danger text-start mt-2">Email is required!</div>}
                                </div>


                                <button
                                    type="button"

                                    className="btn btn-primary"
                                    onClick={(e) => loginHandler(e)}
                                >
                                    Get OTP
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
