import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../data'
import { IoStarSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import store from '../store/Store';

export default function Products_Details() {
    let { id } = useParams()
    let { addToCart } = useContext(store)
    return (
        <>

            {data.filter((item) => item.id === parseInt(id)).map((item) => {
                return (
                    <>

                        <div className="container" style={{ marginTop: '100px', marginLeft: '250px' }}>
                            <div className="row mt-5">
                                <div className="col-4 mt-5">
                                    <img src={item.img} className="img-fluid w-75" alt="" />
                                </div>
                                <div className="col-8">
                                    <h1>{item.title}</h1>
                                    <h5>{`category:  ${item.category}`} </h5>
                                    <h5>{`category:  ${item.company}`} </h5>
                                    <div className="d-flex justify-content-between" style={{ width: '26%' }}>
                                        <div className="me-5">
                                            <IoStarSharp className="text-warning" />
                                            <IoStarSharp className="text-warning" />
                                            <IoStarSharp className="text-warning" />
                                            <IoStarSharp className="text-warning" />
                                            <IoStarSharp className="text-warning" />
                                        </div>
                                        <div>
                                            {item.reviews}
                                        </div>
                                    </div>
                                    <div className="pricing d-flex mt-3">
                                        <h3 className="text-decoration-line-through text-secondary">{item.prevPrice}</h3>
                                        <h2 className="fw-bold ms-3">{item.newPrice}</h2>
                                    </div>
                                    <p>{item.description}</p>
                                    <div>

                                        <button onClick={() => addToCart(item)} className="btn btn-outline-danger w-25">Add to cart <FaShoppingCart className="ms-4" /></button>
                                        <Link to={`/wishlist/${item.id}`}>
                                            <button className="btn btn-outline-success ms-3 w-25">Buy Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>

                )

            })}

        </>
    )
}
