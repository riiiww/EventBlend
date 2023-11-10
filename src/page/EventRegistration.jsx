import "./eventRegistration.css"
import Lottie from 'lottie-react';
import animationLines from "./animation/animationLines.json"
import { Link } from 'react-router-dom';

function EventRegistration() {
    return(
        <header className="eventRegistrationContainer">
            <Lottie animationData={animationLines} className="animationLines" />
            <div className="registrationContent">
                <h1 className="textRegistrationContent">Квиток на найкращу подію!</h1>
                <div className="formContainer">
                    <label className="labelEventRegistration" htmlFor="name">ПІБ:</label>
                    <input className="name" type="text" id="name" name="name" required />

                    <label className="labelEventRegistration" htmlFor="phone">Номер телефону:</label>
                    <input className="phone" type="tel" id="phone" name="phone" pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}" required />

                    <label className="labelEventRegistration" htmlFor="email">E-mail:</label>
                    <input className="email" type="email" id="email" name="email" required />

                    <label className="labelEventRegistration" htmlFor="quantityTickets">Кількість квитків:</label>
                    <input className="quantityTickets" type="number" id="quantityTickets" name="quantityTickets" min="1" max="10" required />

                    <Link to="/BuyTicket"><button className="registerButton">Перейти до сплати</button></Link>
                </div>
            </div>
        </header>
    )
}

export default EventRegistration;