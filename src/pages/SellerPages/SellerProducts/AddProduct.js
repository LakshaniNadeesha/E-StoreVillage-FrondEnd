import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";
import { MdFileUpload } from "react-icons/md";
import YupPassword from "yup-password";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthHeader } from "react-auth-kit";
import axios from "axios";
import { useForm } from "react-hook-form";
import Notiflix from "notiflix";
YupPassword(Yup)
const AddProduct = () => {
    const navigate = useNavigate();


    const [Cate, setCate] = useState([])

    useEffect(() => {

        axios.get("http://localhost:3030/v1/category", {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        })
            .then((res) => {
                setCate(res.data.data)
            }).catch((err) => {
                console.log(err);
            });

    }, [])
    // login form validation rules 
    const validationSchemaCategory = Yup.object().shape({
        product: Yup.string()
            .required('Product name is required'),
        category: Yup.string()
            .required('Category is required'),
        stock: Yup.string()
            .required('Category is required'),
        price: Yup.string()
            .required('Category is required'),
    });
    const formOptionsCategory = { resolver: yupResolver(validationSchemaCategory) };

    // get login functions to build form with useForm() hook
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register: registerProductFrom, handleSubmit: handleSubmitProductFrom, reset: resetProductFrom, formState: { errors: errorsProductFrom } } = useForm(formOptionsCategory);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // login functions
    const authHeader = useAuthHeader()
    async function submitCategory(data) {
        axios.post('http://localhost:3030/v1/product', {
            category_id: data.category,
            name: data.product,
            image: "string",
            price_sale: data.price,
            qty: data.stock,
            description: 'null',
            price_discount: data.price,
            discount_rate: 0

        }, {
            withCredentials: true,
        }).then((res) => {
            navigate('/seller_product')
            Notiflix.Notify.success('You have Category successfully!');
        }).catch((err) => {
            Notiflix.Notify.failure('error');
        });
    }


    return (
        <div className="add-product-main-container">
            <div className="add-product-row-container">
                <div className="create-new-product">
                    <form className="new-product-form-box" onSubmit={handleSubmitProductFrom(submitCategory)}>
                        <div className="new-product-full">
                            <div className="new-product-left">
                                <label>Product Name</label>
                                <input type="text" {...registerProductFrom('product')} className={`add-new-product-input-text ${errorsProductFrom.product ? 'is-invalid' : ''}`} name="product" placeholder="Handmade Necklace" />
                            </div>
                        </div>

                        <div className="new-product-full">
                            <div className="new-product-left">
                                <label>Product Category</label>
                                <select name="category" {...registerProductFrom('category')} className={`add-new-product-input-text ${errorsProductFrom.category ? 'is-invalid' : ''}`}>
                                    {Cate.map((item, index) => (
                                        <>
                                            <option value={item.id}>{item.name}</option>
                                        </>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="new-product-full">
                            <div className="new-product-left">
                                <label>Product Stock</label>
                                <input type="number" name="stock" {...registerProductFrom('stock')} className={`add-new-product-input-text ${errorsProductFrom.stock ? 'is-invalid' : ''}`} />
                            </div>
                        </div>

                        <div className="new-product-full">
                            <div className="new-product-left">
                                <label>Product Price (LKR)</label>
                                <input type="text" name="price" {...registerProductFrom('price')} className={`add-new-product-input-text ${errorsProductFrom.price ? 'is-invalid' : ''}`} placeholder="400.00" />
                            </div>
                        </div>


                        <label>Upload Product Image</label>
                        <div className="add-new-product-image-input">
                            <input type="file" id="product-image-submission" accept=".jpg, .png" hidden />
                            <MdFileUpload size={30} style={{ marginLeft: "30%" }} />
                            <p>Browse File to Upload</p>

                        </div>

                        <div className="add-new-product-btn">
                            <button type="submit" className="add-new-product-success-btn" >Add</button>
                            <button className="add-new-product-cancel-btn" onClick={() => navigate("/seller_product")}>Cancel</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddProduct;
