import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationLines from './animation/animationLines.json';
import UserAuth from './UserAuth';
import './profile.css';


function Profile() {
  const [isOrganizer, setIsOrganizer] = useState(false);
  const navigate = useNavigate();


  const [userData, setUserData] = useState({
    login: '',
    email: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!UserAuth() || !token) {
          console.error('User is not authenticated or token is missing');
          return;
        }

        const response = await axios.get('http://ec2-51-20-95-148.eu-north-1.compute.amazonaws.com:3002/userData', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData({
          login: response.data.login,
          email: response.data.email,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);
  
  const handleLogout = async () => {
    if (!UserAuth()) {
      console.error('User is not authenticated');
      return;
    }
  
    try {
      await axios.post('http://ec2-51-20-95-148.eu-north-1.compute.amazonaws.com:3002/logout', {});
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  
  const handleOrganizerChange = async () => {
    const token = localStorage.getItem('token');
    if (!UserAuth() || !token) {
      console.error('User is not authenticated or token is missing');
      return;
    }
  
    try {
      const response = await axios.post(
        'http://ec2-51-20-95-148.eu-north-1.compute.amazonaws.com:3002/addRole',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log(response.data.message);
      localStorage.setItem('role', 'Organizer');
    } catch (error) {
      console.error('Error during role change:', error);
    }
  };
  
  return (
    <header>
      <div className='profile'>
        <Lottie animationData={animationLines} className="animationLines" />
        <div className='profileBlock'>
          <div className='userData'>
            <h1 className='userlogin'>Логін - {userData.login}</h1>
            <h1>E-mail - {userData.email}</h1>
          </div>
          <div className='userOrganizerFlag'>
          <label className='checkboxisOrganizer'>
            <input type='checkbox' checked={isOrganizer} onChange={() => setIsOrganizer(!isOrganizer)} />
            <span className='custom-checkbox'></span>
            <span className='checkbox-label'>Організатор подій</span>
          </label>
          <button className='buttonSaveRole' onClick={handleOrganizerChange}>Зберегти роль</button>
          </div>
          <button className='buttonExit' onClick={handleLogout}>
            Вийти з акаунта
          </button>
        </div>
      </div>
    </header>
  );
}

export default Profile;
