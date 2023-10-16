import './header.css';
import search_icon from "../png/icons/search-icon.svg";
import message_icon from "../png/icons/message-icon.svg";
import sity_icon from "../png/icons/sity-svg.svg";
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Header () {
    return(
        <Fragment>
          <div className="container">
            <header className='header'>
         <div class="header__wrapper">
            <div class="header__block1">
          <div class="logo">
            Event Blend
          </div>
          <div class="logo2">
            Event Blend
          </div>
        </div>
        <div class="header__block2">
          <nav class="nav">
            <a href="/">
              Головна
            </a>
            <Link to="/Events">Події</Link>
            <a href="/">
              Квитки
            </a>
          </nav>
        </div>
        <div class="header__block3">
          <a href="/">
            <img src={search_icon} alt="search"></img>
          </a>
          <a href="/">
            <img src={message_icon} alt="calendar"></img>
          </a>
        </div>
        <div class="header__block4">
                <a href="/"><img src={sity_icon} alt="sity"></img>Оберіть місто</a>
                <Link to="/Signup">Увійти</Link>
            </div>
            </div>
        </header>

        </div>
        <Outlet/>
        </Fragment>
    )
}
export default Header;