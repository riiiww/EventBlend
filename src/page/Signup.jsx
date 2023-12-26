import React, { useState } from 'react';
import axios from 'axios';
import Lottie from 'lottie-react';
import animationLines from './animation/animationLines.json';
import { useNavigate, Link } from 'react-router-dom';
import './signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    login: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://ec2-51-20-95-148.eu-north-1.compute.amazonaws.com:3002/register', formData);
      navigate('/Signin');
      window.location.reload();
      console.log(response.data);
    } catch (error) {
      console.error('Помилка при реєстрації:', error.response ? error.response.data : error.message);
    }
  };
  
  return (
    <header>
      <div className="container3">
        <Lottie animationData={animationLines} className="animationLines" />
        <div className="signupBlock">
        <form onSubmit={handleSubmit}>
          <div className="square">
              <div className="signupBlock1">
                <div className="signupBlock2">
                  <h1>Логін:</h1>
                  <input className="login" type="text" id="log" name="login" autocomplete="off" value={formData.login} onChange={handleChange} required minLength="4" maxLength="13" />
                </div>
                <div className="signupBlock3">
                  <h1>E-mail:</h1>
                  <input className="Email" type="email" id="email" name="email" autocomplete="off" value={formData.email} onChange={handleChange} required minLength="6" maxLength="35" />
                </div>
                <div className="signupBlock4">
                  <h1>Пароль:</h1>
                  <input className="password" type="password" id="password" name="password" value={formData.password} onChange={handleChange} required minLength="6" maxLength="20" />
                </div>
                <div className="signupBlock5">
                  <button type="submit">Зареєструватися</button>
                </div>
              </div>
            <div className="signupBlock6">
              <h1>Вже маєте аккаунт? -</h1>
              <button><Link to="/Signin" className="signinLink">Увійти</Link></button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Signup;
