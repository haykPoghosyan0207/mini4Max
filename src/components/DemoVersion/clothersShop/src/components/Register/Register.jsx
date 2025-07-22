import React, { useState } from "react";
import {handleRegister} from "../../Services/AuthServices/userRegServices.js";
import { useNavigate ,Link} from "react-router-dom";

import "./Register.css"

export default function Register() {
    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
    });

    const [errorMessages, setErrorMessages] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleRegister(userData, setUserData, setErrorMessages);
        if (errorMessages.length === 0) {
            navigate("/profile"); // գրանցումից հետո տեղափոխում է profile էջ
        }
    };

    return (
        <div className="register-wrapper">
            <h2 className="register-title">Գրանցում</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                    <label htmlFor="firstname">Անուն</label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={userData.firstname}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastname">Ազգանուն</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={userData.lastname}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Էլ. հասցե</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Հեռախոս</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Գաղտնաբառ</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </div>

                {errorMessages.length > 0 && (
                    <ul className="error-message-list">
                        {errorMessages.map((err, index) => (
                            <li key={index} className="error-message">{err}</li>
                        ))}
                    </ul>
                )}

                <button type="submit" className="register-button">Գրանցվել</button>
            </form>
            <p className="login-redirect-text">
                Ունե՞ք արդեն հաշիվ։{" "}
                <Link to="/login" className="login-link">Մուտք գործեք</Link>
            </p>
        </div>
    );
}
