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

const Ukraine_cities = [
  "Київ", "Харків", "Одеса", "Дніпро", "Донецьк", "Запоріжжя", "Львів", "Кривий Ріг", "Миколаїв", "Маріуполь",
  "Вінниця", "Херсон", "Полтава", "Чернігів", "Чернівці", "Житомир", "Суми", "Івано-Франківськ", "Кам'янець-Подільський",
  "Тернопіль", "Луцьк", "Біла Церква", "Кременчук", "Кропивницький", "Мелітополь", "Нікополь", "Ужгород", "Бердянськ",
  "Севастополь", "Ізмаїл", "Іршава", "Краматорськ", "Слов'янськ", "Керч", "Євпаторія", "Сімферополь", "Луганськ", "Дружківка",
  "Макіївка", "Бердичів", "Жовква", "Дрогобич", "Мукачеве", "Нововолинськ", "Бровари", "Коростень", "Черкаси", "Павлоград",
  "Ковель", "Кременець", "Скадовськ", "Бориспіль", "Красноармійськ", "Хмельницький", "Лисичанськ", "Лубни", "Рівне",
  "Словута", "Стрий", "Суми", "Хуст", "Ялта", "Яремче", "Хотин", "Шостка", "Шпола", "Щастя", "Щолкіне"
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

  const handleChange = async (e) => {
    const { name, value, files } = e.target;
    if (name === 'Image') {
      const imageFile = files[0];
  
      setFormData((prevData) => ({
        ...prevData,
        [name]: imageFile,
      }));
  
      if (imageFile) {
        await handleImageUpload(imageFile);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  const handleImageUpload = async (imageFile) => {
    try {
      const formDataImage = new FormData();
      formDataImage.append('image', imageFile);
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
                            <select className="Venue" type="text" id="city" name="Venue" required autocomplete="off" onChange={handleChange} value={formData.Venue} >
                                {Ukraine_cities.map((city) => (
                                  <option key={city} value={city}>
                                    {city}
                                  </option>
                                ))}
                            </select>
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
                        <label className="ButtonAddImage" htmlFor="image">
                          <h1>Додати зображення</h1>
                          <img src={imageIcon} alt="ImageIcon" />
                          <input type="file" id="image" name="Image" accept="image/*" onChange={handleChange} style={{ display: 'none' }} />
                        </label>
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