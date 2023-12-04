import React from 'react';
import './events.css';
import concerts_png from '../png/pictures/concerts.png';
import corporations_png from '../png/pictures/corporations.png';
import exhibitions_png from '../png/pictures/exhibitions.png';
import festivals_png from '../png/pictures/festivals.png';
import premieres_png from '../png/pictures/premieres.png';
import theaters_png from '../png/pictures/theaters.png';
import plus_icon from '../png/icons/plus-icon.svg';
import UserAuth from './UserAuth';
import { Link } from 'react-router-dom';

function Events() {
  const isAuthenticated = UserAuth();
  const isOrganizer = localStorage.getItem('role') === 'Organizer';
  
    return(
        <header>
            <div className="container6">
                <div className="CreateEvent">
                    {isAuthenticated && isOrganizer && <Link to="/CreateEvent"><img style={{height: "16px"}}src={plus_icon} alt="plus_icon"></img>Створити подію</Link>}
                </div>
            </div>
            <div className="container5">
                <div className="categories1">
                    <div className="eventBlock1">
                        <a href="/">
                            <Link to="/CategoryEvents?EventCategory=Концерти">
                                <img src={concerts_png} alt="concerts_image" />
                                <span className="image-text">Концерти</span>
                            </Link>
                        </a>
                    </div>
                    <div className="eventBlock2">
                        <a href="/">
                            <Link to="/CategoryEvents?EventCategory=Театри">
                                <img src={theaters_png} alt="theaters_image" />
                                <span className="image-text">Театри</span>
                            </Link>
                        </a>
                    </div>             
                    <div className="eventBlock3">
                        <a href="/">
                            <Link to="/CategoryEvents?EventCategory=Фестивалі">
                                <img src={festivals_png} alt="festivals_image" />
                                <span className="image-text">Фестивалі</span>
                            </Link>
                        </a>
                    </div>
                </div>
                <div className="categories2">
                    <div className="eventBlock4">
                        <a href="/">
                            <Link to="/CategoryEvents?EventCategory=Виставки">
                                <img src={exhibitions_png} alt="exhibitions_image" />
                                <span className="image-text">Виставки</span>
                            </Link>
                        </a>
                    </div>
                    <div className="eventBlock5">
                        <a href="/">
                            <Link to="/CategoryEvents?EventCategory=Прем'єри">
                                <img src={premieres_png} alt="premieres_image" />
                                <span className="image-text">Прем'єри</span>
                            </Link>
                        </a>
                    </div>
                    <div className="eventBlock6">
                        <a href="/">
                            <Link to="/CategoryEvents?EventCategory=Корпоративи">
                                <img src={corporations_png} alt="corporations_image" />
                                <span className="image-text">Корпоративи</span>
                            </Link>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Events;