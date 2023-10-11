import "./contents.css";
import main_page_image from "../png/pictures/main-page.png";

function Contents() {
  return (
    <header>
      <div className="container1">
        <div className="content__block2">
          <div className="content">
          </div>
          <div className="image">
            <img src={main_page_image} alt="main_image" />
          </div>
        </div>
        <div className="content__block1">
          Вітаємо! Дізнайтеся про найцікавіші та найближчі події у Вашому регіоні, забронюйте квитки, зустрічайте нових людей та насолоджуйтеся вибраними подіями разом з нами. Робимо Ваші враження незабутніми!
        </div>
      </div>
    </header>
  );
}

export default Contents;
