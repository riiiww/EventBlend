import "./events.css"
import concerts_png from "../png/pictures/concerts.png"
import corporations_png from "../png/pictures/corporations.png"
import exhibitions_png from "../png/pictures/exhibitions.png"
import festivals_png from "../png/pictures/festivals.png"
import premieres_png from "../png/pictures/premieres.png"
import theaters_png from "../png/pictures/theaters.png"


function Events() {
    return(
        <header>
            <div className="container5">
                <div className="categories1">
                    <div className="eventBlock1">
                        <a href="/">
                            <img src={concerts_png} alt="concerts_image" />
                            <span className="image-text">Концерти</span>
                        </a>
                    </div>
                    <div className="eventBlock2">
                        <a href="/">
                            <img src={theaters_png} alt="theaters_image" />
                            <span className="image-text">Театри</span>
                        </a>
                    </div>             
                    <div className="eventBlock3">
                        <a href="/">
                            <img src={festivals_png} alt="festivals_image" />
                            <span className="image-text">Фестивалі</span>
                        </a>
                    </div>
                </div>
                <div className="categories2">
                    <div className="eventBlock4">
                        <a href="/">
                            <img src={exhibitions_png} alt="exhibitions_image" />
                            <span className="image-text">Виставки</span>
                        </a>
                    </div>
                    <div className="eventBlock5">
                        <a href="/">
                            <img src={premieres_png} alt="premieres_image" />
                            <span className="image-text">Прем'єри</span>
                        </a>
                    </div>
                    <div className="eventBlock6">
                        <a href="/">
                            <img src={corporations_png} alt="corporations_image" />
                            <span className="image-text">Корпоративи</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Events;