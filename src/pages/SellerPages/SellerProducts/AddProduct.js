import React from "react";
import "./AddProduct.css";
import {useNavigate} from "react-router-dom";
import {MdFileUpload} from "react-icons/md";

const AddProduct = () => {
    const navigate = useNavigate();

    return (
        <div className="add-product-main-container">
            <div className="add-product-row-container">
                <div className="create-new-product">
                    <form className="new-product-form-box">
                        <div className="new-product-full">
                            <div className="new-product-left">
                                <label>Product Name</label>
                                <input type="text" className="add-new-product-input-text" placeholder="Handmade Necklace" required/>
                            </div>
                        </div>

                        <div className="new-product-full">
                            <div className="new-product-left">
                                <label>Product Category</label>
                                <select className="add-new-product-input-text1">
                                    <option value="accessories" style={{color:"#656464"}}>Accessories</option>
                                    <option value="clothing" style={{color:"#656464"}}>Clothing</option>
                                    <option value="bakeryItems" style={{color:"#656464"}}>Bakery Items</option>
                                    <option value="cosmetics" style={{color:"#656464"}}>Cosmetic</option>
                                    <option value="giftBoxes" style={{color:"#656464"}}>Gift Boxes</option>
                                </select>
                            </div>
                        </div>
                        <div className="new-product-full">
                            <div className="new-product-left">
                                <label>Product Stock</label>
                                <input type="number" className="add-new-product-input-text" required/>
                            </div>
                        </div>

                        <div className="new-product-full">
                            <div className="new-product-left">
                                <label>Product Price (LKR)</label>
                                <input type="text" className="add-new-product-input-text" placeholder="400.00"required/>
                            </div>
                        </div>


                        <label>Upload Product Image</label>
                        <div className="add-new-product-image-input">
                            <input type="file" id="product-image-submission" accept=".jpg, .png" hidden required/>
                            <MdFileUpload size={30} style={{marginLeft:"30%"}}/>
                            <p>Browse File to Upload</p>

                        </div>

                        <div className="add-new-product-btn">
                            <button type="submit" className="add-new-product-success-btn">Add</button>
                            <button className="add-new-product-cancel-btn" onClick={() => navigate("/seller_product")}>Cancel</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddProduct;
