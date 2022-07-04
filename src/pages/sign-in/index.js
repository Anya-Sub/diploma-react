import SignInInput from "../../shared/sign-in-input";
import "../../pages/sign-in/sign-in.scss"

const SignIn = () => {
  return (
   <main>
    <div className="Sign-in">
        <div className='Sign-in__tittle'>
            <button className='Sign-in__tittle__home'>Back to home</button>
            <h1 className='Sign-in__tittle__word'>Sign In</h1>
        </div>
          <SignInInput 
            placeholder="Email" 
            label="Email" 
          />
          <SignInInput 
            placeholder="Password" 
            label="Password" 
          />
          <div className='Sign-in-card'> 
              <button className='Sign-in-card-forgot'>Forgot password?</button>
              <button className='Sign-in-card-sing'>Sign In</button>
              <div className='Sign-in-card-account'>
                  <p className='Sign-in-card-account-question'>Don’t have an account?</p>
                  <button className='Sign-in-card-account-question'>Sign Up</button>
              </div>
          </div>
     </div>     
   </main>
  )
}

export default SignIn;