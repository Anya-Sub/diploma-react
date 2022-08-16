import { 
  IS_USER_LOGGED_IN,
  SET_USER_LOGGED_IN
} from "../../types/isUserLoggedIn";
import { user } from '../../../contsants/localStorage';

const INITIAL_STATE = {
  isUserLoggedIn: false
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case IS_USER_LOGGED_IN: 
      console.log('isUserLoggedIn:', state?.isUserLoggedIn)
      if (localStorage.getItem(user.password) && localStorage.getItem(user.email)) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
      return {
        ...state
      };
    case SET_USER_LOGGED_IN:
      console.log('User was setted to be logged in:')
      state.isUserLoggedIn = true;
     
      return {
        ...state
      }

    default: return state;
  }
}

export default reducer;
