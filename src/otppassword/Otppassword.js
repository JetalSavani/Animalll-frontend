import React from 'react'
// import { useNavigate } from 'react-router-dom';
import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from 'react';
import { baseUrl } from '../BaseUrl/BaseUrl';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



export default function Otppassword() {

    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [errMsg, setErrMsg] = useState(false)

    const resendOtp = async () => {
        let body = {
            email: localStorage.getItem("email")
        }
        await axios.post(baseUrl + "users/forgot-password", body).then((res) => {
            console.log('res', res)
            toast.success(res?.data.message)
            navigate("/otppassword")
        }).catch((err) => {
            console.log('err', err)
        })
    }

    const otpVerify = async () => {
        if (otp) {
            let body = {
                email: localStorage.getItem("email"),
                otp: Number(otp)
            }
            await axios.post(baseUrl + "users/verify-otp", body).then((res) => {
                console.log('res', res)
                setOtp("")
                setErrMsg(false)
                toast.success(res?.data.message)
                navigate("/changepassword")
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
                                OTP password
                            </h3>


                            <form>

                                <OTPInput value={otp} onChange={setOtp} autoFocus OTPLength={6} otpType="number" disabled={false} secure />
                                <ResendOTP className=" button-resend mt-2" onResendClick={() => resendOtp()} />
                                {errMsg && <div className='text-danger text-start'>Otp is required!</div>}

                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={otpVerify}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
