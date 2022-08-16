import { useState } from "react";

import SignInInput from "../../shared/sign-in-input";
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import "../../pages/sign-in/sign-in.scss";
import { checkIfUserIsLoggedIn, setUserLoggedIn } from "../../redux/actions/isUserLoggedIn";
import Header from "../../shared/header"
import Footer from "../../shared/footer"
import { routes } from "../../contsants/routes";
import { user } from '../../contsants/localStorage';

const SignIn = ({
  setUserLoggedIn
}) => {
  const navigate = useNavigate();
  const [emailData, setEmailData] = useState('');
  const [passwordData, setPasswordData] = useState('');

  const navigateBackToHome = () => {
    navigate(routes.home);
  };

  const saveAndRedirectUser = () => {
    localStorage.setItem(user.email, emailData);
    localStorage.setItem(user.password, passwordData);
    setUserLoggedIn();
    navigateBackToHome();
  };

  return (
    <>
    <Header/>
      <main>
        <div className="sign-in">
          <div className='sign-in__title'>
            <button 
              className='sign-in__title__home'
              onClick={navigateBackToHome}
            >
              Back to home
            </button>
            <h1 className='sign-in__tittle__word'>Sign In</h1>
          </div>
          <div className='sign-in__card'>
            <SignInInput 
              placeholder="Your email" 
              label="Email"
              setValue={setEmailData}
            />
            <SignInInput 
              placeholder="Your password" 
              label="Password"
              setValue={setPasswordData}
            />
            <div className='sign-in__card__questions'> 
              <button className='sign-in__card__questions__forgot'>Forgot password?</button>
              <button 
                className='sign-in__card__questions__btn'
                onClick={() => saveAndRedirectUser()}
                disabled={!emailData && !passwordData}
              >
                Sign In
              </button>
              <div className='sign-in__card__questions__account'>
                <p className='sign-in__card__questions__account__text'>Don’t have an account?</p>
                <button 
                  className='sign-in__card__questions__account__btn'
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>     
      </main>
    <Footer/>
   </>
  )
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
