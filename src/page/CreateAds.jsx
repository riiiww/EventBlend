import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './createAds.css';
import Lottie from 'lottie-react';
import axios from 'axios';
import animationLines from './animation/animationLines.json';
import ads from '../png/pictures/ads.png';
import imageIcon from "../png/icons/image-icon.svg";

function CreateAds() {
  const [eventTitle, setEventTitle] = useState('');
  const [expirationDateAds, setExpirationDateAds] = useState('');
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImageFile(file);
  };

  const handleAddImageClick = () => {
    document.getElementById('image').click();
  };

  const handleCreateAds = async () => {
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('eventTitle', eventTitle);
      formData.append('expirationDateAds', expirationDateAds);
      formData.append('image', selectedImageFile);
  
      const responseImage = await axios.post('http://ec2-51-20-95-148.eu-north-1.compute.amazonaws.com:3002/uploadImageAds', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      const imageUrl = responseImage.data.imageUrl;
  
      const responseCreateAds = await axios.post('http://ec2-51-20-95-148.eu-north-1.compute.amazonaws.com:3002/createAds', {
        eventTitle,
        expirationDateAds,
        imageUrl,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      console.log(responseCreateAds.data.message);
      navigate('/ticketsForEvents');
    } catch (error) {
      console.error('Error creating ad:', error);
    }
  };

  return (
    <header className='headerCreateAds'>
      <div className='containerCreateAds'>
        <Lottie animationData={animationLines} className="animationLines" />
        <div className='textCreatingAds'>Створення реклами</div>
        <div className='CreateAdsBlock'>
            <h1 className="sizeWarning">Розмір зображення має бути 1920x340! Будь ласка, перевірте розмір вашого зображення.</h1>
          <div className='blockAdsImage'>
            {selectedImageFile ? (
              <img src={URL.createObjectURL(selectedImageFile)} alt="adsImage" className="adsImage" />
            ) : (
              <img src={ads} alt="adsImage" className="adsImage" />
            )}
          </div>
          <div className='infoAdsBlock'>
            <div className='inputAdsBlock'>
              <div className='inputAdsBlockTitle'>
                <label className="labelCreateAds" htmlFor="EventTitleForAds">Назва події:</label>
                <input className="EventTitleForAds" type="text" id="eventTitle" name="eventTitle" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} required minLength="6" maxLength="40" autoComplete="off"/>
              </div>
              <div className='inputAdsBlockExpiration'>
                <label className="labelCreateAds" htmlFor="ExpirationDateAds">Термін дії реклами(к-сть днів):</label>
                <input className="ExpirationDateAds" type="number" id="expirationDateAds" name="expirationDateAds" value={expirationDateAds} onChange={(e) => setExpirationDateAds(e.target.value)} min="1" max="15" required/>
              </div>
            </div>
            <input type="file" id="image" name="image" onChange={handleImageChange} accept="image/*" required style={{ display: 'none' }}/>
            <button className="ButtonAddImageForAds" onClick={handleAddImageClick}>
              Додати зображення<img src={imageIcon} alt="ImageIcon" />
            </button>
          </div>
          <button className="ButtonCreateAds" onClick={handleCreateAds}>Створити рекламу</button>
        </div>
      </div>
    </header>
  );
}

export default CreateAds;
