import { 
  IS_USER_LOGGED_IN,
  SET_USER_LOGGED_IN
} from "../../types/isUserLoggedIn";

export const checkIfUserIsLoggedIn = (dispatch: any) => {
  return dispatch({
    type: IS_USER_LOGGED_IN
  })
}
export const setUserLoggedIn = (dispatch: any) => {
  return dispatch({
    type: SET_USER_LOGGED_IN
  })
}