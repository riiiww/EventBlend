import "./createEvent.css";
import noImage from "../png/pictures/no-image.png";
import imageIcon from "../png/icons/image-icon.svg";
import Lottie from 'lottie-react';
import animationLines from "./animation/animationLines.json";

function CreateEvent() {
    return(
        <header>
            <div className="container7">
                <Lottie animationData={animationLines} className="animationLines" />
                <div className="creatingEvents">Створення події</div>
                <div className="EventCreationPlate">
                    <div className="DataFillingTable">
                        <div className="createEventBlock1">
                            <h1>Назва події:</h1>
                            <input className="EventTitle" type="text" id="title" name="title" required minlength="6" maxlength="40" />
                        </div>
                        <div className="createEventBlock2">
                            <h1>Категорія події:</h1>
                            <input className="EventCategory" type="text" id="category" name="category" required minlength="6" maxlength="11" />
                        </div>
                        <div className="createEventBlock3">
                            <h1>Місце проведення:</h1>
                            <input className="Venue" type="text" id="city" name="city" required minlength="6" maxlength="20" />
                        </div>
                        <div className="createEventBlock4">
                            <h1>Дата:</h1>
                            <input className="Date" type="date" id="inputDate" name="date" required />
                        </div>
                        <div className="createEventBlock5">
                            <div>
                                <h1>Час:</h1>
                                <input className="Time" type="time" id="inputTime" name="time" required />
                            </div>
                            <div>
                                <h1>Ціна квитка:</h1>
                                <input className="TicketPrice" type="text" id="ticketPrice" name="ticketPrice" maxlength="4" required />
                            </div>
                        </div>
                    </div>
                    <div className="CreateEventt">
                        <div className="Image">
                            <img src={noImage} alt="NoImage" />
                        </div>
                        <button className="ButtonAddImage"><h1>Додати зображення</h1><img src={imageIcon} alt="ImageIcon" /></button>
                        <div className="NewEvent">
                            <button className="ButtonNewEvent"><h1>Створити подію</h1></button>
                        </div>
                        </div>
                    </div>
                </div> 
        </header>
    )
}

export default CreateEvent;