import './sign-in-input.scss';

const SignInInput = (props) => {
  return ( 
    <div className="sing-in__input">
      <label>{props.label}</label>
      <input placeholder={props.placeholder}></input>
    </div>  
  )
};

export default SignInInput;