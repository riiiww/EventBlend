import './createAds.css'
import Lottie from 'lottie-react';
import animationLines from './animation/animationLines.json';
import ads from '../png/pictures/ads.png';
import imageIcon from "../png/icons/image-icon.svg";

function CreateAds() {
    return(
        <header className='headerCreateAds'>
            <div className='containerCreateAds'>
                <Lottie animationData={animationLines} className="animationLines" />
                <div className='textCreatingAds'>Створення реклами</div>
                    <div className='CreateAdsBlock'>
                        <div className='blockAdsImage'>
                            <img src={ads} alt="adsImage" className="adsImage" />
                        </div>
                        <div className='infoAdsBlock'>
                            <div className='inputAdsBlock'>
                                <div className='inputAdsBlockTitle'>
                                    <label className="labelCreateAds" htmlFor="EventTitleForAds">Назва події:</label>
                                    <input className="EventTitleForAds" type="text" id="eventTitle" name="eventTitle" required minLength="6" maxLength="40" autocomplete="off"/>
                                </div>
                                <div className='inputAdsBlockExpiration'>
                                    <label className="labelCreateAds" htmlFor="ExpirationDateAds">Термін дії реклами:</label>
                                    <input className="ExpirationDateAds" type="number" id="expirationDateAds" name="expirationDateAds" min="1" max="15" required />
                                </div>
                            </div>    
                            <button className="ButtonAddImageForAds">Додати зображення<img src={imageIcon} alt="ImageIcon" /></button>
                        </div>
                        <button className="ButtonCreateAds">Створити рекламу</button>
                    </div>
            </div>
        </header>
    )
}

export default CreateAds;