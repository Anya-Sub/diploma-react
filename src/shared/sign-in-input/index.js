import './sign-in-input.scss';

const SignInInput = (props) => {
  return ( 
    <div className="sing-in__input">
      <label className='sing-in__input__label'>{props.label}</label>
      <input 
        className='sing-in__input__placeholder'
        placeholder={props.placeholder}
        onChange={(event) => props.setValue(event.target.value)}
      />
    </div>  
  )
};

export default SignInInput;
