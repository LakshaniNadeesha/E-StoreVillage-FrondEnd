import React, { useState } from "react";
import "./ManageCategory.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import Notiflix from "notiflix";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useAuthHeader } from "react-auth-kit";

const ManageCategory = () => {
    const [data, setData] = useState([])
    const authHeader = useAuthHeader()

    useEffect(() => {
        axios.get("http://localhost:3030/v1/category", { withCredentials: true, })
            .then((res) => {
                console.log(res);
                setData(res.data.data)
            })
    }, [])


    function onDeleteCat(id) {
        Swal.fire({
            title: 'Do you want to delete this category?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.delete("http://localhost:3030/v1/category/" + id)
                    .then((res) => {
                        window.location.reload();
                    })
                Swal.fire('Deleted!', '', 'success')
            }
        })
    }


    const navigate = useNavigate();
    return (
        <div className="manage-category-main-container">
            <div className="add-category-button">
                <button onClick={() => navigate("/categories/add_category")}>
                    <AiOutlinePlus size={20} />
                    Add New Category</button>
            </div>

            <table style={{ width: "100%", borderSpacing: 0 }}>
                <tbody>
                    <tr className="manage-category-table-header ">
                        <td
                            style={{
                                width: "16%",
                                paddingLeft: "3%",
                                padding: "1.5% 2%",
                                textAlign: "left",
                                borderBottomLeftRadius: 31,
                                borderTopLeftRadius: 31,
                            }}
                            className="manage-category-table-header-txt">
                            Category No
                        </td>
                        <td
                            className="manage-category-table-header-txt"
                            style={{ width: "16%", textAlign: "left" }}>
                            Category Type
                        </td>
                        <td
                            className="manage-category-table-header-txt"
                            style={{ width: "20%", textAlign: "center" }}>
                            Description
                        </td>
                        {/* <td
                            className="manage-category-table-header-txt"
                            style={{ width: "16%", textAlign: "center" }}>
                            Sub Categories
                        </td> */}
                        <td
                            className="manage-category-table-header-txt"
                            style={{ width: "16%", textAlign: "center" }}>
                            Status
                        </td>

                        <td
                            style={{
                                width: "16%",
                                textAlign: "center",
                                borderBottomRightRadius: 31,
                                borderTopRightRadius: 31,
                            }}
                            className="manage-category-table-header-txt">
                            Option
                        </td>
                    </tr>
                    <div style={{ height: 10 }}></div>

                    {data.map((item, index) => (
                        <>
                            <tr style={{ backgroundColor: "white" }}>
                                <td
                                    style={{
                                        width: "16%",
                                        borderTopLeftRadius: 20,
                                        borderBottomLeftRadius: 20,
                                        paddingLeft: "5%",
                                        padding: "2%",
                                    }}>
                                    <div className="manage-category-no-row">
                                        <span className="manage-category-detail-txt">{item.id}</span>
                                    </div>
                                </td>
                                <td style={{ width: "16%", padding: "1%" }}>
                                    <p className="manage-category-detail-txt">{item.name}</p>

                                </td>
                                <td style={{ width: "20%", padding: "1%" }}>
                                    <p className="manage-category-detail-txt">{item.qty} stock
                                    </p>
                                </td>
                                {/* <td style={{ width: "16%", paddingLeft: "3%" }}>
                                {data.map((item, index) => (
                                    <>
                                     <p className="manage-category-detail-txt">Men's Clothing</p>
                                    </>
                                ))}
                                </td> */}
                                <td style={{ width: "16%", paddingLeft: "6%" }}>
                                    <p className="manage-category-detail-txt light-green">{(item.status === 1 ? 'Active' : 'Inactive')}</p>
                                </td>
                                <td
                                    style={{
                                        width: "16%",
                                        borderTopRightRadius: 20,
                                        borderBottomRightRadius: 20,
                                        padding: "2%",
                                    }}>
                                    <div className="manage-category-respond-option">
                                        <button className="category-update" onClick={() => navigate(`/categories/update_category?id=${item.id}`)}>Update</button>
                                        <br />
                                        {(item.Item.length>0 ? '':<button className="category-remove" onClick={() => onDeleteCat(item.id)}>Remove</button>)}
                                    </div>
                                </td>

                            </tr>
                            <div style={{ height: 20 }}></div>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageCategory;
