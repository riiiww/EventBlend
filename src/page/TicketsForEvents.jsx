import React, { useRef, useEffect, useState } from 'react';
import UserAuth from './UserAuth';
import './ticketsForEvents.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import tik from '../png/pictures/the weeknd concert.png'

function TicketsForEvents() {
    const isAuthenticated = UserAuth();
    const isOrganizer = localStorage.getItem('role') === 'Organizer';

    const adsBlockRef = useRef(null);
    const [adImages, setAdImages] = useState([]);

    const scrollRight = () => {
        if (adsBlockRef.current) {
            adsBlockRef.current.scrollLeft += 1935;
        }
    };

    const scrollLeft = () => {
        if (adsBlockRef.current) {
            adsBlockRef.current.scrollLeft -= 1935;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://ec2-51-20-95-148.eu-north-1.compute.amazonaws.com:3002/getAllImageUrls');
                setAdImages(response.data.imageUrls);
            } catch (error) {
                console.error('Помилка при отриманні imageUrl:', error);
            }
        };

        fetchData();

        const intervalId = setInterval(() => {
            scrollRight();
        }, 10000);

        return () => clearInterval(intervalId);
    }, []); 

    return (
        <div className='headerTickets'>
            <div className='containerTickets'>
                {isAuthenticated && isOrganizer && <Link to="/CreateAds" style={{ textDecoration: 'none' }}>
                    <button className="ButtonAddAds">Додати рекламу</button>
                </Link>}
                <div className='advert' ref={adsBlockRef}>
                    <div className='scrollButtons'>
                        <button style={{ width: '50px', height: '50px' }} className="scrollLeftButton" onClick={scrollLeft}></button>
                        <button style={{ width: '50px', height: '50px' }} className="scrollRightButton" onClick={scrollRight}></button>
                    </div>
                    {adImages.map((imageUrl, index) => (
                        <div key={index} className='adsOne'>
                            <img src={imageUrl} alt={`adsImage-${index}`} className="adsImage" />
                        </div>
                    ))}
                </div>
                <div className='contTickets'>
                    <div className='lll'><img style={{width: '200px', height: '200px'}}src={tik} alt="adsImage" className="adsImage" /></div>
                    <div className='lll'><img style={{width: '200px', height: '200px'}}src={tik} alt="adsImage" className="adsImage" /></div>
                    <div className='lll'><img style={{width: '200px', height: '200px'}}src={tik} alt="adsImage" className="adsImage" /></div>
                    <div className='lll'><img style={{width: '200px', height: '200px'}}src={tik} alt="adsImage" className="adsImage" /></div>
                    <div className='lll'><img style={{width: '200px', height: '200px'}}src={tik} alt="adsImage" className="adsImage" /></div>
                    <div className='lll'><img style={{width: '200px', height: '200px'}}src={tik} alt="adsImage" className="adsImage" /></div>
                    <div className='lll'><img style={{width: '200px', height: '200px'}}src={tik} alt="adsImage" className="adsImage" /></div>
                    <div className='lll'><img style={{width: '200px', height: '200px'}}src={tik} alt="adsImage" className="adsImage" /></div>
                </div>
            </div>
        </div>
    );
}

export default TicketsForEvents;
