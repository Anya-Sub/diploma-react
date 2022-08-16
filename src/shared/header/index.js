import "./header.scss";
import React, { useEffect } from "react"
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import  Search from "../../pictures/search.png";
import Logo from "../../pictures/Logo.png";
import { connect } from "react-redux";
import { routes } from "../../contsants/routes";
import { checkIfUserIsLoggedIn, setUserLoggedIn } from "../../redux/actions/isUserLoggedIn";


const Header = ({
  checkIfUserIsLoggedIn,
  setUserLoggedIn,
  cardData,
  setPostsPerPage
}) => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(routes.home);
  };

  const handleSearch = (event) => {
    setPostsPerPage(cardData.filter((item) => item.title.includes(event.target.value)));
  };

  return (
    <header>
      <div className="All-info">
        <section className="All-info__logo">
            <button 
              className="All-info__logo__button"
              onClick={navigateToHome}
            >
              <img src={Logo} />
            </button>
        </section>
        <section className="All-info__action">
          <div className="All-info__action__searching">
            <input 
              type="search" 
              id="site-search" 
              onChange={(event) => handleSearch(event)}
            />
            <img src={Search} />
          </div>
          <div className="All-info__action__registration">
            <button onClick={() => {
              setUserLoggedIn()
              checkIfUserIsLoggedIn()
              }}>AM</button>
            <div className="All-info__action__registration__words">
               <p>Artem</p>
               <p>Malkhin</p>
            </div>
          </div>
        </section>
      </div>
    </header>
  )
};

const mapStateToProps = (state) => {
  return {
    checkIfUserIsLoggedIn: state.isUserLoggedIn,
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkIfUserIsLoggedIn: () => checkIfUserIsLoggedIn(dispatch),
    setUserLoggedIn: () => setUserLoggedIn(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
