import React from 'react'
import { Link } from 'react-router-dom'

function Order() {
    return (
        <>
            <>
                {/* Start Page Title Area */}
                <div className="page-title-area bg5 jarallax" data-jarallax='{"speed": 0.2}'>
                    <div className="container">
                        <div className="page-title-content">
                            <h1>Order</h1>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>Order</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* End Page Title Area */}
                {/* Start Cart Area */}
                <section className="cart-area ptb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <form>
                                    <div className="cart-table table-responsive">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Unit Price</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="product-thumbnail">
                                                        <Link to="#">
                                                            <img src="assets/img/shop1.jpg" alt="item" />
                                                        </Link>
                                                    </td>
                                                    <td className="product-name">
                                                        <Link to="#">Wood Pencil</Link>
                                                    </td>
                                                    <td className="product-price">
                                                        <span className="unit-amount">$191.00</span>
                                                    </td>
                                                    <td className="product-quantity">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            min={1}
                                                            defaultValue={1}
                                                            title="Qty"
                                                            id="quantity"
                                                            name="quantity"
                                                        />
                                                    </td>
                                                    <td className="product-subtotal">
                                                        <span className="subtotal-amount">$191.00</span>
                                                        <Link to="#" className="remove">
                                                            <i className="icofont-trash" />
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="product-thumbnail">
                                                        <Link to="#">
                                                            <img src="assets/img/shop2.jpg" alt="item" />
                                                        </Link>
                                                    </td>
                                                    <td className="product-name">
                                                        <Link to="#">T-Shirt</Link>
                                                    </td>
                                                    <td className="product-price">
                                                        <span className="unit-amount">$111.00</span>
                                                    </td>
                                                    <td className="product-quantity">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            min={1}
                                                            defaultValue={1}
                                                            title="Qty"
                                                            id="quantity"
                                                            name="quantity"
                                                        />
                                                    </td>
                                                    <td className="product-subtotal">
                                                        <span className="subtotal-amount">$111.00</span>
                                                        <Link to="#" className="remove">
                                                            <i className="icofont-trash" />
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="product-thumbnail">
                                                        <Link to="#">
                                                            <img src="assets/img/shop3.jpg" alt="item" />
                                                        </Link>
                                                    </td>
                                                    <td className="product-name">
                                                        <Link to="#">Casual Shoe</Link>
                                                    </td>
                                                    <td className="product-price">
                                                        <span className="unit-amount">$100.00</span>
                                                    </td>
                                                    <td className="product-quantity">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            min={1}
                                                            defaultValue={1}
                                                            title="Qty"
                                                            id="quantity"
                                                            name="quantity"
                                                        />
                                                    </td>
                                                    <td className="product-subtotal">
                                                        <span className="subtotal-amount">$100.00</span>
                                                        <Link to="#" className="remove">
                                                            <i className="icofont-trash" />
                                                        </Link>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="product-thumbnail">
                                                        <Link to="#">
                                                            <img src="assets/img/shop4.jpg" alt="item" />
                                                        </Link>
                                                    </td>
                                                    <td className="product-name">
                                                        <Link to="#">Coffee Bag</Link>
                                                    </td>
                                                    <td className="product-price">
                                                        <span className="unit-amount">$414.00</span>
                                                    </td>
                                                    <td className="product-quantity">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            min={1}
                                                            defaultValue={1}
                                                            title="Qty"
                                                            id="quantity"
                                                            name="quantity"
                                                        />
                                                    </td>
                                                    <td className="product-subtotal">
                                                        <span className="subtotal-amount">$414.00</span>
                                                        <Link to="#" className="remove">
                                                            <i className="icofont-trash" />
                                                        </Link>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="cart-buttons">
                                        <div className="row align-items-center">
                                            <div className="col-lg-7 col-md-7">
                                                <div className="continue-shopping-box">
                                                    <Link to="#" className="btn btn-primary">
                                                        Continue Shopping
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-5 text-end">
                                                <Link to="#" className="btn btn-primary">
                                                    Update Cart
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Cart Area */}
            </>

        </>
    )
}

export default Order