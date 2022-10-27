import React, { useState } from "react";
import './ManageComplaints.css';
import profile1 from "../../../assests/images/profile.png";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import { useEffect } from "react";
import Swal from "sweetalert2";

const ManageComplaints = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const authHeader = useAuthHeader()
    const auth = useAuthUser()


    useEffect(() => {

        axios.get("http://localhost:3030/v1/complain", {
            withCredentials: true,
        })
            .then((res) => {
                console.log(res);
                setData(res.data.data)
            }).catch((err) => {
                console.log(err);
            });

    }, [])

    function onDeleteCom(id) {
        Swal.fire({
            title: 'Do you want to delete this Complain?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.delete("http://localhost:3030/v1/complain/" + id)
                    .then((res) => {
                        window.location.reload();
                    })
                Swal.fire('Deleted!', '', 'success')
            }
        })
    }


    return (
        <div className="complaints-main-container">
            <div className="complaint-search-input">
                <FiSearch />
                <input placeholder="Search" style={{ fontSize: "15px" }} />
            </div>

            <table style={{ width: "100%", borderSpacing: 0 }}>
                <tbody>
                    <tr className="complaints-table-header ">
                        <td
                            style={{
                                width: "15%",
                                padding: "1.5% 2%",
                                textAlign: "left",
                                borderBottomLeftRadius: 31,
                                borderTopLeftRadius: 31,
                            }}
                            className="complaints-table-header-txt">
                            Complaint No
                        </td>
                        <td
                            className="complaints-table-header-txt"
                            style={{ width: "15%", textAlign: "center" }}>
                            Customer
                        </td>
                        <td
                            className="complaints-table-header-txt"
                            style={{ width: "50%", textAlign: "center" }}>
                            Complaint
                        </td>
                        <td
                            style={{
                                width: "20%",
                                textAlign: "center",
                                borderBottomRightRadius: 31,
                                borderTopRightRadius: 31,
                            }}
                            className="complaints-table-header-txt">
                            Option
                        </td>
                    </tr>
                    <div style={{ height: 10 }}></div>

                    {data.map((item, indxe) => (
                        <>
                            <tr style={{ backgroundColor: "white" }}>
                                <td
                                    style={{
                                        width: "15%",
                                        borderTopLeftRadius: 20,
                                        borderBottomLeftRadius: 20,
                                        padding: "2%",
                                    }}>
                                    <div className="complaint-no-row">
                                        <span className="complaints-detail-txt">{item.id}</span>
                                    </div>
                                </td>
                                <td
                                    style={{
                                        width: "15%",
                                        padding: "2%",
                                    }}>
                                    <div className="complaints-customer-name">
                                        <img src={profile1} className="complaints-customer-item-size" />
                                        <p className="complaints-customer-name-txt">
                                            {item.name}
                                        </p>
                                    </div>
                                </td>
                                <td style={{ width: "50%", padding: "2%" }}>
                                    <h3 className="complaints-detail-txt">
                                        {item.complain}
                                    </h3>
                                </td>

                                <td
                                    style={{
                                        width: "20%",
                                        borderTopRightRadius: 20,
                                        borderBottomRightRadius: 20,
                                        padding: "2%",
                                    }}>
                                    <div className="complaints-respond-option">
                                        <button onClick={() => navigate(`/complaints/repond?id=${item.id}`)}>Respond</button>
                                        <button onClick={() => onDeleteCom(item.id)}>Delete</button>
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

export default ManageComplaints;
