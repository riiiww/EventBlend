import './tickets.css'
import { Link } from 'react-router-dom';
import TemporaryName from '../png/pictures/the weeknd concert.jpg'

function Tickets() {
    return (
        <header> 
            <div className='containerTickets'>
                <Link to="/CreateAds" style={{textDecoration: 'none'}}><button className="ButtonAddAds">Додати рекламу</button></Link>
                <div className='adsBlock'>
                    <div className='adsOne'>
                        <div className='adsInfo'>
                            <img src={TemporaryName} alt="adsImage" />
                            <div className='adsDescription'>
                                <h1 className="adsText">TemporaryName</h1>
                                <h1 className="description">Енергійний концерт, що змішує виразність музики та потужний виступ. Відчуйте атмосферу неймовірної гармонії та емоційного підйому. Непередбачувана подорож у світ звуку.</h1>
                            </div>
                        </div>
                    </div>
                    <div className='adsOne'>
                        <div className='adsInfo'>
                            <img src={TemporaryName} alt="adsImage" />
                            <div className='adsDescription'>
                                <h1 className="adsText">TemporaryName</h1>
                                <h1 className="description">Енергійний концерт, що змішує виразність музики та потужний виступ. Відчуйте атмосферу неймовірної гармонії та емоційного підйому. Непередбачувана подорож у світ звуку.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Tickets;