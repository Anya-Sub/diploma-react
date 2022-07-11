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
            <div className='sign-in__tittle'>
                <button className='sign-in__tittle__home'
                 onClick={navigateBackToHome}
                 >
                  Back to home
                </button>
                <h1 className='sign-in__tittle__word'>Sign In</h1>
            </div>
              <SignInInput 
                placeholder="Email" 
                label="Email" 
              />
              <SignInInput 
                placeholder="Password" 
                label="Password" 
              />
              <div className='sign-in__card'> 
                  <button className='sign-in__card__forgot'>Forgot password?</button>
                  <button className='sign-in__card__sign'>Sign In</button>
                  <div className='sign-in__card__account'>
                      <p className='sign-in__card__account__question'>Don’t have an account?</p>
                      <button className='sign-in__card__account__button'>Sign Up</button>
                  </div>
              </div>
        </div>     
      </main>
   <Footer/>
   </>
  )
}

export default SignIn;