import React, { useState } from "react";
import { handleLogin } from "../../Services/AuthServices/userRegServices.js";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [emailError, setEmailError] = useState("");
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
        await handleLogin(userData, navigate, setEmailError);
    };

    return (
        <div className="login-wrapper">
            <h2 className="login-title">Մուտք</h2>
            <form onSubmit={handleSubmit} className="login-form">
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

                {emailError && <p className="error-message">{emailError}</p>}

                <button type="submit" className="login-button">
                    Մուտք գործել
                </button>
            </form>

            <p className="register-text">
                Ուշադրություն չունե՞ք հաշիվ.{" "}
                <Link to="/register" className="register-link">
                    Գրանցվել
                </Link>
            </p>
        </div>
    );
}
