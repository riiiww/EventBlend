import "./buyTicket.css";
import uah_icon_white from "../png/icons/uah_icon_white.svg"
import Lottie from 'lottie-react';
import animationLines from "./animation/animationLines.json"

function formatCreditCardNumber(input) {
    // Видаляємо нецифрові символи із введеного тексту
    let cardNumber = input.value.replace(/\D/g, '');

    // Обмежуємо довжину до 16 символів
    if (cardNumber.length > 16) {
        cardNumber = cardNumber.slice(0, 16);
    }
  
    // Форматуємо номер картки по 4 цифри через пробіл
    let formattedCardNumber = cardNumber.replace(/(\d{4})/g, '$1 ');
  
    // Оновлюємо значення в полі вводу
    input.value = formattedCardNumber.trim();
}

function formatExpiryDate(input) {
    // Видаляємо нецифрові символи із введеного тексту
    let expiryDate = input.value.replace(/\D/g, '');

    // Обмежуємо довжину до 4 символів
    if (expiryDate.length > 4) {
        expiryDate = expiryDate.slice(0, 4);
    }

    // Форматуємо термін дії по 2 цифри через /
    let formattedExpiryDate = expiryDate.replace(/(\d{2})/, '$1/');

    // Оновлюємо значення в полі вводу
    input.value = formattedExpiryDate.trim();
}

function formatCVV2(input) {
    // Видаляємо нецифрові символи із введеного тексту
    let cvv2 = input.value.replace(/\D/g, '');

    // Обмежуємо довжину до 3 символів
    if (cvv2.length > 3) {
        cvv2 = cvv2.slice(0, 3);
    }

    // Оновлюємо значення в полі вводу
    input.value = cvv2.trim();
}

function BuyTicket() {
    return(
        <header className="BuyTicket">
            <Lottie animationData={animationLines} className="animationLines" />
            <div className="BuyTicketContent">
                <h1 className="TextTicketPrice">До сплати - 100<img src={uah_icon_white} alt="uah_icon"></img></h1>
                <div className="inputContainer">
                    <label className="labelBuyTicket" htmlFor="creditCard">Номер картки:</label>
                    <input className="creditCard" type="text" id="creditCard" name="creditCard" pattern="\d*" maxLength="19" placeholder="0000 0000 0000 0000" required autocomplete="off" onInput={(e) => formatCreditCardNumber(e.target)} />
                </div>
                <div className="InputDataContainer">
                    <div className="inputdataContainer">
                        <label className="labelBuyTicket" htmlFor="expiryDate">Термін дії:</label>
                        <input className="expiryDate" type="text" id="expiryDate" name="expiryDate" pattern="\d{2}/\d{2}" placeholder="MM/YY" required autocomplete="off" onInput={(e) => formatExpiryDate(e.target)} />
                    </div>

                    <div className="inputdataContainer">
                        <label className="labelBuyTicket" htmlFor="cvv2">CVV2:</label>
                        <input className="cvv2" type="password" id="cvv2" name="cvv2" maxlength="3" pattern="\d{3}" placeholder="***" required autocomplete="off" onInput={(e) => formatCVV2(e.target)} />
                    </div>
                </div>
                <div className="inputContainer">
                    <label className="labelBuyTicket" htmlFor="email">E-mail для отримання квитанції:</label>
                    <input className="email" type="email" id="email" name="email" maxlength="50" required />
                </div>

                <h1 className="confirmationMessage">Натискаючи на кнопку «Сплатити», ви підтверджуєте що ознайомлені з переліком інформації про послугу та приймаєте умови публічного договору.</h1>
                <button className="payButton">Сплатити</button>
            </div>
        </header>
    )
}

export default BuyTicket;