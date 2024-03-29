import { useEffect, useState } from "react";

import "./header.scss";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import  Search from "../../pictures/search.png";
import Logo from "../../pictures/Logo.png";
import { connect } from "react-redux";
import { routes } from "../../contsants/routes";
import { checkIfUserIsLoggedIn, setUserLoggedIn } from "../../redux/actions/isUserLoggedIn";
import { user } from '../../contsants/localStorage';


const Header = ({
  checkIfUserIsLoggedIn,
  posts,
  setPostsPerPage
}) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('')

  const navigateToHome = () => {
    navigate(routes.home);
  };

  const handleSearch = (event) => {
    setPostsPerPage(posts.filter((item) => item.title.includes(event.target.value)));
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();

    if (localStorage.getItem(user.email)) {
      setUserName(localStorage.getItem(user.email))
    }
  }, [])

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
            {userName &&
              <div className="All-info__action__registration__short">
                {userName[0].toUpperCase()}
              </div>
            }
            <div className="All-info__action__registration__words">
              <p>{userName}</p>
            </div>
          </div>
        </section>
      </div>
    </header>
  )
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    checkIfUserIsLoggedIn: state.isUserLoggedIn,
    posts: state.postsData.postsData,
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkIfUserIsLoggedIn: () => checkIfUserIsLoggedIn(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
