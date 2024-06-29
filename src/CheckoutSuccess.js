import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from './BaseUrl/BaseUrl'
import { useEffect } from 'react'

function CheckoutSuccess() {
    let config = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    }
    const pathName = window.location.search.split("=")[1]
    console.log('pathName', pathName)
    const removeData = () => {
        axios.post(baseUrl + `product/order-success?id=${pathName}`, {}, config)
            .then((res) => {
                console.log('res', res)
            }).catch((err) => {
                console.log('err', err)
            })
    }
    useEffect(() => {
        removeData()
    }, [])
    return (
        <div class=" payment-height">
            <div class="payment">
                <div class="payment_header">
                    <div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>
                </div>
                <div class="content">
                    <h1>Payment Success !</h1>
                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
                    <Link to="/">Go to Home</Link>
                </div>

            </div>
        </div>
    )
}

export default CheckoutSuccess