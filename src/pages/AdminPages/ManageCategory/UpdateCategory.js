import React, { useEffect, useState } from "react";
import "./Category.css";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { MdFileUpload } from "react-icons/md";
import axios from 'axios';
import Notiflix from "notiflix";
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { useAuthHeader } from "react-auth-kit";
import Cookies from 'js-cookie'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
const UpdateCategory = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")

    const [data, setData] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3030/v1/category/" + id, { withCredentials: true, })
            .then((res) => {
                setData(res.data)
            })
    }, [])

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

    async function submitCategory(data) {
        console.log(data);
        axios.patch('http://localhost:3030/v1/category/'+id, {
            name: data.category,
            description: data.description,
            image: (data.image ? data.image : "null"),
            status: data.status
        }, {
            withCredentials: true,
        }).then((res) => {
            console.log(res.data.expires_in);
            navigate('/categories');
            Notiflix.Notify.success('You have Category successfully!');
        }).catch((err) => {
            Notiflix.Notify.failure(err.response.data.message);
        });
    }
    return (
        <div className="add-new-category-main-container">
            <div className="add-new-category-row-container">
                <div className="create-new-category">
                    <form className="new-category-form-box" onSubmit={handleSubmitCategoryFrom(submitCategory)}>
                        <div className="new-category-full">
                            <input type="text" name="id" value={data.id} hidden />
                            <div className="new-category-left">
                                <label>Category type</label>
                                <input type="text" name="category"  {...registerCategoryFrom('category')} className={`add-new-category-input-text ${errorsCategoryFrom.category ? 'is-invalid' : ''}`} required />
                            </div>
                        </div>

                        <div className="new-category-full">
                            <div className="new-category-left">
                                <label>Description</label>
                                <textarea name="description"  {...registerCategoryFrom('description')} className={`add-new-category-input-text1 ${errorsCategoryFrom.description ? 'is-invalid' : ''}`}  />
                            </div>
                        </div>

                        <div className="new-category-full">
                            <div className="new-category-left">
                                <label>Status</label>
                                <select name="status" {...registerCategoryFrom('status')} className={`add-new-category-input-text2 ${errorsCategoryFrom.status ? 'is-invalid' : ''}`} >
                                    <option value="1" >Active</option>
                                    <option value="2">Inactive</option>
                                </select>

                            </div>
                        </div>


                        <div className="add-new-category-btn">
                            <button type="submit" className="update-category-success-btn">Update</button>
                            <button className="add-new-category-cancel-btn" >Cancel</button>
                        </div>

                    </form>
                </div>

            </div >
        </div >
    );
};

export default UpdateCategory;
