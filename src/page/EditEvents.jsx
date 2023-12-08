import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import imageIcon from "../png/icons/image-icon.svg";
import deleteIcon from "../png/icons/delete-icon.svg";
import "./editEvents.css"

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

function EditEvents() {
  const eventId = sessionStorage.getItem('eventId');
  const [formData, setFormData] = useState({
    EventTitle: '',
    EventCategory: '',
    Venue: '',
    Date: '',
    Time: '',
    TicketPrice: '',
    Image: null,
    ImageURL: '',
    eventId: eventId,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/events/${eventId}`);
        const eventData = response.data;

        setFormData((prevData) => ({
          ...prevData,
          EventTitle: eventData.EventTitle,
          EventCategory: eventData.EventCategory,
          Venue: eventData.Venue,
          Date: eventData.Date,
          Time: eventData.Time,
          TicketPrice: eventData.TicketPrice,
          ImageURL: eventData.Image,
          eventId: eventData.eventId,
        }));
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, [eventId]);

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
      // Виклик запиту PUT для редагування події
      await axios.put(
        `http://localhost:3000/editEvent`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'eventId': eventId,
          },
        }
      );
      navigate('/Events');
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };
  const handleDelete = async () => {
    const isConfirmed = window.confirm('Ви впевнені, що хочете видалити подію?');
    if(isConfirmed){
      try {
        await axios.delete(`http://localhost:3000/deleteEvent/${eventId}`);
        navigate('/Events');
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };
    return (
        <header className="containerPageEditEvents">
            <div className="TitleEditEvents">Редагування події</div>
            <div className="edit-events-container">
                <div className="left-column">
                    <div className="InputEventTitle">
                        <h1>Назва події:</h1>
                        <input className="EventTitle" type="text" id="EventTitle" name="EventTitle" required minlength="6" maxlength="40" autocomplete="off" value={formData.EventTitle} onChange={handleChange}/>
                    </div>
                    <div className="InputEventCategory">
                        <h1>Категорія події:</h1>
                        <select className="EventCategory" id="EventCategory" name="EventCategory" value={formData.EventCategory} onChange={handleChange} >
                                {eventCategories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="InputVenue">
                        <h1>Місце проведення:</h1>
                        <select className="Venue" type="text" id="city" name="Venue" required autocomplete="off" onChange={handleChange} value={formData.Venue} >
                                {Ukraine_cities.map((city) => (
                                  <option key={city} value={city}>
                                    {city}
                                  </option>
                                ))}
                        </select>
                    </div>
                    <div className="InputDate">
                        <h1>Дата:</h1>
                        <input className="Date" type="date" id="Date" name="Date" required autocomplete="off" value={formData.Date} onChange={handleChange}/>
                    </div>
                    <div className="InputTimeAndTicketPrice">
                        <div>
                            <h1>Час:</h1>
                            <input className="Time" type="time" id="Time" name="Time" required autocomplete="off" value={formData.Time} onChange={handleChange} />
                        </div>
                        <div>
                            <h1>Ціна квитка:</h1>
                            <input className="TicketPrice" type="text" id="TicketPrice" name="TicketPrice" maxlength="4" required autocomplete="off" value={formData.TicketPrice} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <div className="event-image">
                      <img src={formData.Image || formData.ImageURL} alt="EventImage" style={{ width: '400px', height: '380px' }} />
                    </div>
                    <label className="ButtonAddimage" htmlFor="image">
                        <h1>Додати зображення</h1>
                        <img src={imageIcon} alt="ImageIcon" />
                        <input type="file" id="image" name="Image" accept="image/*" onChange={handleChange} style={{ display: 'none' }} />
                    </label>
                    <button className="SaveChanges" onClick={handleSubmit}><h1>Зберегти зміни</h1></button>
                </div>
                <div className="deleteicon" onDoubleClick={handleDelete}><img src={deleteIcon} alt="deleteIcon"/></div>
            </div>
        </header>
    );
}

export default EditEvents;
