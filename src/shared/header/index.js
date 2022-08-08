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
  setUserLoggedIn
}) => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(routes.home);
  };

  useEffect(() => {
    checkIfUserIsLoggedIn()
  }, [])

  return (
    <header>
      <div className="All-info">
        <div className="All-info__button">
          <button className="All-info__button__form"
            onClick={navigateToHome}
          >
             <img src={Logo} />
          </button>
        </div>
        <div className="All-ifo__person">
          <div className="All-ifo__person__search">
            <input type="search" id="site-search" name="q" />
            <img src={Search} />
          </div>
          <div className="All-ifo__person__logo">
          <button onClick={() => {
            setUserLoggedIn()
            checkIfUserIsLoggedIn()
          }}>AM</button>
          </div>
          <div className="All-ifo__person__logo__initial">Artem Malkhin</div>
         
        </div>
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
