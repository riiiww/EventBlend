import './createEvent.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import Lottie from 'lottie-react';
import animationLines from "./animation/animationLines.json";
import noImage from "../png/pictures/no-image.png";
import imageIcon from "../png/icons/image-icon.svg";

const eventCategories = [
  'Концерти',
  'Театри',
  'Фестивалі',
  'Виставки',
  'Прем\'єри',
  'Корпоративи',
];

function CreateEvent() {
  const [formData, setFormData] = useState({
    eventId: Date.now(),
    EventTitle: '',
    EventCategory: eventCategories[0],
    Venue: '',
    Date: '',
    Time: '',
    TicketPrice: '',
    Image: null,  
  });

  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'Image') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],  
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleImageUpload = async () => {
    try {
      const formDataImage = new FormData();
      formDataImage.append('image', formData.Image);
      formDataImage.append('eventId', formData.eventId); 
      const response = await axios.post('http://localhost:3000/uploadImage', formDataImage);
      setFormData((prevData) => ({
        ...prevData,
        Image: response.data.imageUrl,
      }));
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleImageUpload();
    try {
      const response = await axios.post('http://localhost:3000/addEvent', formData);
      console.log(response.data);
      navigate('/Events');
    } catch (error) {
      console.error('Error creating event:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
      }
    }
  };
    return(                                         
        <header>
            <div className="container7">
                <Lottie animationData={animationLines} className="animationLines" />
                <div className="creatingEvents">Створення події</div>
                <div className="EventCreationPlate">
                    <div className="DataFillingTable">
                        <div className="createEventBlock1">
                            <h1>Назва події:</h1>
                            <input className="EventTitle" type="text" id="title" name="EventTitle" required minlength="6" maxlength="40" autocomplete="off" value={formData.EventTitle} onChange={handleChange} />
                        </div>
                        <div className="createEventBlock2">
                            <h1>Категорія події:</h1>
                            <select className="EventCategory" id="category" name="EventCategory" required value={formData.EventCategory} onChange={handleChange} >
                                {eventCategories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="createEventBlock3">
                            <h1>Місце проведення:</h1>
                            <input className="Venue" type="text" id="city" name="Venue" required minlength="6" maxlength="20" autocomplete="off" onChange={handleChange} value={formData.Venue}/>
                        </div>
                        <div className="createEventBlock4">
                            <h1>Дата:</h1>
                            <input className="Date" type="date" id="inputDate" name="Date" required onChange={handleChange} value={formData.Date}/>
                        </div>
                        <div className="createEventBlock5">
                            <div>
                                <h1>Час:</h1>
                                <input className="Time" type="time" id="inputTime" name="Time" required onChange={handleChange} value={formData.Time} />
                            </div>
                            <div>
                                <h1>Ціна квитка:</h1>
                                <input className="TicketPrice" type="text" id="ticketPrice" name="TicketPrice" required maxlength="4" autocomplete="off" onChange={handleChange} value={formData.TicketPrice} />
                            </div>
                        </div>
                    </div>
                    <div className="CreateEventt">
                    <div className="Image">
                        <img src={formData.Image ? formData.Image : noImage} alt="NoImage" style={{ width: '320px', height: '320px' }}/>
                      </div>
                      <div className="ImageInput">
                       <input type="file" id="image" name="Image" accept="image/*" onChange={handleChange} />
                      </div>
                            <button className="ButtonAddImage" onClick={handleImageUpload}>
                                <h1>Додати зображення</h1>
                                    <img src={imageIcon} alt="ImageIcon" />
                            </button>
                        <div className="NewEvent">
                          {errorMessage && <p style={{ color: 'red', margin: '0' }}>{errorMessage}</p>}
                          <button className="ButtonNewEvent" onClick={handleSubmit}><h1>Створити подію</h1></button>
                        </div>
                        </div>
                    </div>
                </div> 
        </header>
    )
}

export default CreateEvent;