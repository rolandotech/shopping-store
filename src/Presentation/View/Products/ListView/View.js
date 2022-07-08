import React, { useEffect, useState } from "react";
import ViewModel from "./ViewModel";
import { Button } from "@mui/material";
import './View.css'
import {
    useParams,
    useNavigate,
    useLocation,
} from "react-router-dom";

const ListView = () => {
    const {getProducts, products, increase, decrease} = ViewModel();
    let navigate = useNavigate();

    useEffect(() => {
        getProducts();
    },[])

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 d-flex align-items-center">
                    <img src={products.image} className="prodIMG" />
                </div>
                <div className="details col-md-6 d-flex align-items-center p-4">
                    <div className="holder d-flex justify-content-evenly flex-column">
                        <div className="header col=lg-12">
                            <h1 className="text-start text-uppercase font-weight-bold">{products.title}</h1>
                            <div className="separator border-top border-4 border-dark my-2"></div>
                            <h5 className="text-start font-weight-light font-italic">{products.discription}</h5>
                            
                        </div>
                        <div className="footer col-lg-12">
                            <div className="col-lg-12 text-start d-flex justify-content-start">
                                <label className="quantity-label me-2">Price:</label>
                                <p>${products.price}.00</p>
                            </div>
                            <div className="row mb-5">
                                <div className="col-lg-2 d-flex align-items-center justify-content-start">
                                    <label className="quantity-label">Quantity: </label>
                                </div>
                                <div className="col-lg-10 d-flex justify-content-start align-center">
                                    <Button variant="text" className="qtyBtn" onClick={() => decrease()}>-</Button>
                                    <input type="text" name="quantity"  defaultValue={products.cartQTY} className="border-0 p-1"/>
                                    <Button variant="text" className="qtyBtn" onClick={() => increase()}>+</Button>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 d-flex justify-content-start">
                                <Button className="prodBTN me-3" variant="contained" color="secondary" onClick={() => navigate('/cart')}>Buy Now</Button>
                                <Button className="prodBTN" variant="contained" color="primary">Add to Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ListView