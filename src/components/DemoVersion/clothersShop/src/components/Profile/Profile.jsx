import React, { useEffect, useState } from "react";
import { fetchUserData, handleUpdate } from "../../Services/AuthServices/userRegServices.js";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (!token) {
            navigate("/login");
        } else {
            fetchUserData(setUserData);
        }
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // const handleSave = async () => {
    //     await handleUpdate(userData, setUserData);
    //     setSuccessMessage("Տվյալները հաջողությամբ թարմացվել են։");
    //     setIsEditing(false);
    //     setTimeout(() => setSuccessMessage(""), 3000);
    // };
    //
    // const handleLogout = () => {
    //     localStorage.removeItem("access_token");
    //     localStorage.removeItem("refresh_token");
    //     setUserData({});
    //     navigate("/login");
    // };

    return (
        <div className="profile-wrapper">
            <h2 className="profile-title">Իմ պրոֆիլը</h2>

            {successMessage && <p className="success-message">{successMessage}</p>}

            <div className="profile-form">
                <div className="form-group">
                    <label>Անուն</label>
                    <input
                        type="text"
                        name="firstname"
                        value={userData.firstname}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="input-field"
                    />
                </div>

                <div className="form-group">
                    <label>Ազգանուն</label>
                    <input
                        type="text"
                        name="lastname"
                        value={userData.lastname}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="input-field"
                    />
                </div>

                <div className="form-group">
                    <label>Էլ. հասցե</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="input-field"
                    />
                </div>

                <div className="form-group">
                    <label>Հեռախոս</label>
                    <input
                        type="tel"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="input-field"
                    />
                </div>

                {/*<div className="button-group">*/}
                {/*    {isEditing ? (*/}
                {/*        <button onClick={handleSave} className="save-button">Պահպանել</button>*/}
                {/*    ) : (*/}
                {/*        <button onClick={() => setIsEditing(true)} className="edit-button">Խմբագրել</button>*/}
                {/*    )}*/}
                {/*    <button onClick={handleLogout} className="logout-button">Դուրս գալ</button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}
