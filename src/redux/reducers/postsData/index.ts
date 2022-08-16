import { 
  SET_POSTS_DATA,
} from "../../types/postsData";

const INITIAL_STATE = {
  postsData: []
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_POSTS_DATA:
      return {
        ...state, postsData: action.payload
      };

    default: return state;
  }
}

export default reducer;
