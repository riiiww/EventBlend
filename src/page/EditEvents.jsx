import "./editEvents.css";
import imageIcon from "../png/icons/image-icon.svg"
import TemporaryNameImage from "../png/pictures/TemporaryName.png"

function EditEvents() {
    return (
        <header className="containerPageEditEvents">
            <div className="TitleEditEvents">Редагування події</div>
            <div className="edit-events-container">
                <div className="left-column">
                    <div className="InputEventTitle">
                        <h1>Назва події:</h1>
                        <input className="EventTitle" type="text" id="title" name="title" required minlength="6" maxlength="40" />
                    </div>
                    <div className="InputEventCategory">
                        <h1>Категорія події:</h1>
                        <input className="EventCategory" type="text" id="category" name="category" required minlength="6" maxlength="11" />
                    </div>
                    <div className="InputVenue">
                        <h1>Місце проведення:</h1>
                        <input className="Venue" type="text" id="venue" name="venue" required minlength="6" maxlength="20" />
                    </div>
                    <div className="InputDate">
                        <h1>Дата:</h1>
                        <input className="Date" type="date" id="inputDate" name="date" required />
                    </div>
                    <div className="InputTime">
                        <h1>Час:</h1>
                        <input className="Time" type="time" id="inputTime" name="time" required />
                    </div>
                </div>
                <div className="right-column">
                    <div className="event-image">
                        <img src={TemporaryNameImage} alt="TemporaryNameImage"></img>
                    </div>
                    <button className="ChangeImage"><h1>Змінити зображення</h1><img src={imageIcon} alt="ImageIcon" /></button>
                    <button className="SaveChanges"><h1>Зберегти зміни</h1></button>
                </div>
            </div>
        </header>
    );
}

export default EditEvents;
