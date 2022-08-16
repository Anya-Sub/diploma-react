import SignInInput from "../../shared/sign-in-input";
import { Routes, Route, useNavigate } from 'react-router-dom';
import "../../pages/sign-in/sign-in.scss";
import Header from "../../shared/header"
import Footer from "../../shared/footer"
import { routes } from "../../contsants/routes";

const SignIn = () => {
  const navigate = useNavigate();

  const navigateBackToHome = () => {
    navigate(routes.home);
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
            />
            <SignInInput 
              placeholder="Your password" 
              label="Password" 
            />
            <div className='sign-in__card__questions'> 
              <button className='sign-in__card__questions__forgot'>Forgot password?</button>
              <button className='sign-in__card__questions__btn'>Sign In</button>
              <div className='sign-in__card__questions__account'>
                <p className='sign-in__card__questions__account__text'>Don’t have an account?</p>
                <button className='sign-in__card__questions__account__btn'>Sign Up</button>
              </div>
            </div>
          </div>
        </div>     
      </main>
    <Footer/>
   </>
  )
}

export default SignIn;