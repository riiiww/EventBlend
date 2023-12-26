import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Lottie from 'lottie-react';
import animationLines from './animation/animationLines.json';
import './signin.css';

function Signin() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://ec2-51-20-95-148.eu-north-1.compute.amazonaws.com:3002/login', formData);
            navigate('/');
            window.location.reload();
            const token = response.data.token;
            localStorage.setItem('token', token);
        } catch (error) {
            console.error('Login failed:', error.response.data.error);
        }
    };
    return(
        <header>
            <div className="container4">
                <Lottie animationData={animationLines} className="animationLines" />
                <div className="signinBlock">
                <form onSubmit={handleSubmit}>
                    <div className="square1">
                        <div className="signinBlock1">
                            <div className="signinBlock2">
                                <h1>E-mail:</h1>
                                <input className="Email" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required minLength="6" maxLength="35"/>
                            </div>
                            <div className="signinBlock3">
                                <h1>Пароль:</h1>
                                <input className="password" type="password" id="password" name="password" value={formData.password} onChange={handleChange} required minLength="6" maxLength="20"/>
                            </div>
                            <div className="signinBlock4">
                                <button type="submit">Увійти</button>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </header>
    )
}

export default Signin;