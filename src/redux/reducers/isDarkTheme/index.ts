import { 
  SET_THEME
} from "../../types/isDarkTheme"
import {
  Theme
} from '../../../contsants/common'


const INITIAL_STATE = {
  theme: Theme.Light
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_THEME: 
      return {
        ...state, 
        theme: action.payload
      };

    default: return state;
  }
}

export default reducer;
