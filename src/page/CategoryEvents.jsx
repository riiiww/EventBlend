import "./categoryEvents.css";
import sity_icon from "../png/icons/sity_icon2.svg";
import pencil_icon from "../png/icons/pencil_icon.svg";
import uah_icon from "../png/icons/uah_icon.svg";
import noImage from "../png/pictures/no-image.png";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserAuth from './UserAuth';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function CategoryEvents() {
    const [events, setEvents] = useState([]);
    const [sortByDate, setSortByDate] = useState(false); 
    const isAuthenticated = UserAuth();
    const isOrganizer = localStorage.getItem('role') === 'Organizer';
  
    useEffect(() => {
      const fetchEvents = async () => {
        try {
          const response = await axios.get("http://ec2-51-20-95-148.eu-north-1.compute.amazonaws.com:3002/events");
          const sortedEvents = sortByDate ? sortEventsByDate(response.data) : response.data;
          setEvents(sortedEvents);
        } catch (error) {
          console.error("Error fetching events:", error);
        }
      };
  
      fetchEvents();
    }, [sortByDate]); 

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedCategory = queryParams.get('EventCategory');
  
    const filteredEvents = selectedCategory
      ? events.filter((event) => event.EventCategory === selectedCategory)
      : events;
  
    const sortEventsByDate = (events) => {
      return events.slice().sort((a, b) => {
        const dateA = new Date(a.Date);
        const dateB = new Date(b.Date);
        return dateA - dateB;
      });
    };
  
    const toggleSortByDate = () => {
      setSortByDate(!sortByDate);
    };
    const handleEditEvent = (eventId) => {
      sessionStorage.setItem('eventId', eventId);
    };
  return (
    <header className="concerts-header">
      <div className="SortByDate" onClick={toggleSortByDate}>
        За датою {sortByDate ? '↓' : '↑'}
      </div>
      {filteredEvents.map((event) => (
        <div key={event.id} className="event">
          <div className="event-image">
            <img src={event.Image || noImage} alt={event.EventTitle} style={{ width: '370px', height: '370px' }}/>
          </div>
          <div className="event-details">
            <div className="event-title">{event.EventTitle}</div>
            <div className="event-info">{event.Date} р., {event.Time}</div>
            <div className="event-location"><img src={sity_icon} alt="sity_icon" />{event.Venue}</div>
            <div className="event-price">Ціна квитка: {event.TicketPrice}<img src={uah_icon} alt="uah_icon" /></div>
          </div>  
          {isAuthenticated && isOrganizer && (<Link to="/EditEvents" onClick={() => handleEditEvent(event.eventId)}><img src={pencil_icon} alt="pencil_icon" className="pencil-icon" /></Link>)}
          <div className="event-actions">
            <Link to="/EventRegistration"><button className="buy-button" >Зареєструватися</button></Link>
          </div>
        </div>
      ))}
    </header>
  );
}

export default CategoryEvents;
