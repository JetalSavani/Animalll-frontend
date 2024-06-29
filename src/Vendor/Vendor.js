import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { baseUrl } from '../BaseUrl/BaseUrl';

export default function Vendor() {
    let userData = JSON.parse(localStorage.getItem("userData"))
    console.log('userData', userData)
    const navigate = useNavigate();
    const [newData, setNewData] = useState({})
    const [errMsg, setErrMsg] = useState(false)

    const handleChange = (e) => {
        let { name, value } = e.target
        setNewData({
            ...newData,
            [name]: value
        })
    }

    const handleSubmit = async () => {
        if (newData?.bankName && newData?.bankNumber && newData?.ifsc) {
            console.log('newData?.bankNumber.length >= 8', newData?.bankNumber.length >= 8)
            console.log('newData?.bankNumber.length <= 12', newData?.bankNumber.length <= 12)

            if (newData?.bankNumber.length === 12 && newData?.ifsc?.length === 11) {
                let body = {
                    bankName: newData?.bankName,
                    accountNumber: Number(newData?.bankNumber),
                    ifscCode: newData?.ifsc
                }
                let config = {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem("token")
                    }
                }
                await axios.post(baseUrl + "users/create-vendor", body, config).then((res) => {
                    console.log('res', res)
                    setNewData({})
                    setErrMsg(false)
                    localStorage.setItem("userData", JSON.stringify(res?.data?.user))
                    toast.success(res?.data.message)
                    navigate("/")
                }).catch((err) => {
                    console.log('err', err)
                    toast.error(err?.response?.data.message)
                })
            } else if (newData?.bankNumber.length !== 12) {
                toast.error("Bank Account Number must be  12 number")
            } else {
                toast.error("IFSC Code must be 11 number")
            }
        } else {
            setErrMsg(true)
        }
    }
    return (
        <div>
            <section className="password-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="login-form">
                            <h3>
                                Add Me As A Vendor
                            </h3>
                            {/* <div className="login-or"> </div> */}

                            <form>
                                <div className="form-group">
                                    <label htmlFor="username">
                                        <i className="icofont-ui-lock" />
                                    </label>
                                    <input
                                        type="type"
                                        name="bankName"
                                        className="form-control"
                                        value={newData?.bankName}
                                        onChange={(e) => handleChange(e)}
                                        placeholder="Bank Account Name" />{errMsg && !newData?.bankName && <div className="text-danger text-start mt-2">Bank Name is required!</div>} </div>
                                <div className="form-group">
                                    <label htmlFor="username">
                                        <i className="icofont-ui-lock" />
                                    </label>
                                    <input
                                        type="number"
                                        name="bankNumber"
                                        className="form-control"
                                        value={newData?.bankNumber}
                                        onChange={(e) => handleChange(e)}
                                        placeholder="Bank Account Number" />{errMsg && !newData?.bankNumber && <div className="text-danger text-start mt-2">Bank Number is required!</div>} </div>

                                <div className="form-group">
                                    <label htmlFor="username">
                                        <i className="icofont-ui-user-group" />
                                    </label>
                                    <input
                                        type="type"
                                        name="ifsc"
                                        className="form-control"
                                        value={newData?.ifsc}
                                        onChange={(e) => handleChange(e)}
                                        placeholder="IFSC Code" /> {errMsg && !newData?.ifsc && <div className="text-danger text-start mt-2">Ifce Code is required!</div>} </div>
                                <button
                                    type="button"

                                    className="btn btn-primary"
                                    onClick={handleSubmit}
                                >
                                    ADD
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
