import "./concertEvents.css";
import sity_icon from "../png/icons/sity_icon2.svg";
import pencil_icon from "../png/icons/pencil_icon.svg"
import uah_icon from "../png/icons/uah_icon.svg"
import TemporaryNameImage from "../png/pictures/TemporaryName.png"
import IAMXImage from "../png/pictures/IAMX.png"

import { Link } from 'react-router-dom';

function ConcertsEvent() {
    return (
        <header className="concerts-header">
            <div className="SortByDate">За датою ^</div>
            <div className="event">
                <div className="event-image">
                    <img src={TemporaryNameImage} alt="TemporaryNameImage"></img>
                </div>
                <div className="event-details">
                    <div className="event-title">Тимчасова Назва</div>
                    <div className="event-info">06.12.2023 р., 19:00</div>
                    <div className="event-location"><img src={sity_icon} alt="sity_icon"></img>Київ</div>
                    <div className="event-price">Ціна квитка: 100<img src={uah_icon} alt="uah_icon"></img></div>
                </div>
                <Link to="/EditEvents"><img src={pencil_icon} alt="pencil_icon" className="pencil-icon"></img></Link>
                <div className="event-actions">
                    <Link to="/EventRegistration" className="buy-button">Придбати</Link>
                </div>
            </div>

            <div className="event">
                <div className="event-image">
                    <img src={IAMXImage} alt="IAMXImage"></img>
                </div>
                <div className="event-details">
                    <div className="event-title">IAMX</div>
                    <div className="event-info">28.11.2023 р., 18:00</div>
                    <div className="event-location"><img src={sity_icon} alt="sity_icon"></img>Львів</div>
                    <div className="event-price">Ціна квитка: 120<img src={uah_icon} alt="uah_icon"></img></div>
                </div>
                <Link to="/EditEvents"><img src={pencil_icon} alt="pencil_icon" className="pencil-icon"></img></Link>
                <div className="event-actions">
                    <Link to="/EventRegistration" className="buy-button">Придбати</Link>
                </div>
            </div>
        </header>
    );
}

export default ConcertsEvent;
