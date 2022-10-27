import React, { useEffect, useState } from "react";
import "./Category.css";
import { useNavigate } from "react-router-dom";
import { MdFileUpload } from "react-icons/md";
import axios from 'axios';
import { useForm } from "react-hook-form";
import Notiflix from "notiflix";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { useAuthHeader } from "react-auth-kit";
import Cookies from 'js-cookie'

YupPassword(Yup)
const AddNewCategory = () => {
    const navigate = useNavigate();

    // login form validation rules 
    const validationSchemaCategory = Yup.object().shape({
        category: Yup.string()
            .required('Category name is required'),
        description: Yup.string()
            .required('Category description is required'),
    });
    const formOptionsCategory = { resolver: yupResolver(validationSchemaCategory) };

    // get login functions to build form with useForm() hook
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register: registerCategoryFrom, handleSubmit: handleSubmitCategoryFrom, reset: resetCategoryFrom, formState: { errors: errorsCategoryFrom } } = useForm(formOptionsCategory);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // login functions
    const authHeader = useAuthHeader()
    async function submitCategory(data) {
        axios.defaults.withCredentials = true;
        axios.defaults.maxContentLength = '95';
        axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
        axios.post('http://localhost:3030/v1/category', {
            name: data.category,
            description: data.description,
            image: (data.image ? data.image : "null"),
            status: data.status
        }, {
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Cookie': `Authentication=${authHeader().replace('Bearer ', '')}`,
            },
            withCredentials: true,
        }).then((res) => {
            console.log(res.data.expires_in);
            navigate('/categories');
            Notiflix.Notify.success('You have Category successfully!');
        }).catch((err) => {
            Notiflix.Notify.failure(err.response.data.message);
        });
    }



    const [data, setData] = useState([])
    useEffect(() => {
        // axios.defaults.headers['Cookies'] = `Authentication=${authHeader().replace('Bearer ', '')} ;_auth_type=Bearer`;
        axios.get("http://localhost:3030/v1/category")
            .then((res) => {
                console.log(res);
                setData(res.data.data)
            })
    }, [])
    return (
        <div className="add-new-category-main-container">
            <div className="add-new-category-row-container">
                <div className="create-new-category">
                    <form className="new-category-form-box" onSubmit={handleSubmitCategoryFrom(submitCategory)}>
                        <div className="new-category-full">
                            <div className="new-category-left">
                                <label>Category type</label>
                                <input name="category" required
                                    {...registerCategoryFrom('category')} className={`add-new-category-input-text ${errorsCategoryFrom.category ? 'is-invalid' : ''}`}
                                />
                            </div>
                        </div>

                        {/* <div className="new-category-full">
                            <div className="new-category-left">
                                <label>Sub Categories (If Any)</label>
                                <select className="add-new-category-input-text">
                                    {data.map((item, index) => (
                                        <>
                                            <option value={item.id}>{item.name}</option>
                                        </>
                                    ))}
                                </select>
                            </div>
                        </div> */}

                        <div className="new-category-full">
                            <div className="new-category-left">
                                <label>Description</label>
                                <textarea name="category" textarea
                                    {...registerCategoryFrom('description')} className={`add-new-category-input-text1 ${errorsCategoryFrom.description ? 'is-invalid' : ''}`}
                                />
                            </div>
                        </div>

                        <div className="new-category-full">
                            <div className="new-category-left">
                                <label>Status</label>
                                <select name="status" {...registerCategoryFrom('status')} className={`add-new-category-input-text2 ${errorsCategoryFrom.status ? 'is-invalid' : ''}`}>
                                    <option value="1" style={{ color: "#656464" }}>Active</option>
                                    <option value="2" style={{ color: "#656464" }}>Inactive</option>
                                </select>

                            </div>
                        </div>


                        <div className="add-new-category-btn">
                            <button type="submit" className="add-new-category-success-btn">Add</button>
                            <button className="add-new-category-cancel-btn" onClick={() => navigate("/categories")}>Cancel</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddNewCategory;
