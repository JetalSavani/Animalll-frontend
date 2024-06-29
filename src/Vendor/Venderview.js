import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../BaseUrl/BaseUrl';
import moment from 'moment';
function Venderview() {
    let userData = JSON.parse(localStorage.getItem("userData"));
    let config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    };
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const getProduct = async () => {
        await axios
            .get(
                baseUrl + `product/get-order`,
                config
            )
            .then((res) => {
                console.log("res", res);
                setData(res?.data?.getOrder);
            })
            .catch((err) => {
                console.log("err", err);
            });
    };

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="w-100 mt-5 mb-5">
            <table className='w-100'>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Animal Name</th>
                    <th>Breed Type</th>
                    <th>Phone Number</th>
                    <th>Price</th>
                    <th>Age</th>
                    <th>Date/Time</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td><img src={val?.productId?.frontPhoto} alt="" width={50} height={50} /></td>
                            <td>{val?.productId?.animalType}</td>
                            <td>{val?.productId?.breedType}</td>
                            <td>{val?.productId?.phone}</td>
                            <td>₹{val?.productId?.price}</td>
                            <td>{val?.productId?.age}</td>
                            <td>{moment(val?.createdAt).format("LLL")}</td>
                        </tr>
                    )
                })}
            </table>
        </div>

    )
}

export default Venderview