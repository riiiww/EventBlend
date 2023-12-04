import React, { useRef } from 'react';
import './ticketsForEvents.css';
import { Link } from 'react-router-dom';
import ads from '../png/pictures/ads.png';

function TicketsForEvents() {
    const adsBlockRef = useRef(null);

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

    return (
        <header className='headerTickets'>
            <div className='containerTickets'>
                <Link to="/CreateAds" style={{ textDecoration: 'none' }}>
                    <button className="ButtonAddAds">Додати рекламу</button>
                </Link>
                <div className='adsBlock' ref={adsBlockRef}>
                    <div className='scrollButtons'>
                        <button style={{width: '50px', height: '50px'}} className="scrollLeftButton" onClick={scrollLeft}></button>
                        <button style={{width: '50px', height: '50px'}} className="scrollRightButton" onClick={scrollRight}></button>
                    </div>
                    <div className='adsOne'>
                        <img src={ads} alt="adsImage" className="adsImage" />
                    </div>
                    <div className='adsOne'>
                        <img src={ads} alt="adsImage" className="adsImage" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default TicketsForEvents;
