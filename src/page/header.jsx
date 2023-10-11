import './header.css'
import search_icon from "../png/icons/search-icon.svg"
import message_icon from "../png/icons/message-icon.svg"
import sity_icon from "../png/icons/sity-svg.svg"


function Header () {
    return(
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
            <a href="/">
              Події
            </a>
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
                <a href="/">Увійти</a>
            </div>
            </div>
        </header>

        </div>
    )
}
export default Header;