import "./header.scss";
import 'bootstrap/dist/css/bootstrap.min.css'
import  Search from "../../pictures/search.png";
import Logo from "../../pictures/Logo.png"

const Header = () => {
    return (
      <footer>
        <div className="All-info">
          <div className="All-info__button">
            <button className="All-info__button__form"><p>BLOGOLOGO</p></button>
          </div>
          <div className="All-ifo__person">
            <div className="All-ifo__person__search">
            <input type="search" id="site-search" name="q"
            />
            <img src={Search} />
            </div>
              <div className="All-ifo__person__logo"></div>
              <div className="All-ifo__person__logo__initial">Artem Malkhin</div>
          </div>
        </div>
      </footer>
    )
};

export default Header;