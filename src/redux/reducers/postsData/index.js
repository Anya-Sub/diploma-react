import { 
  SET_POSTS_DATA,
  SET_SAVED_POST_ID
} from "../../types/postsData";

const INITIAL_STATE = {
  postsData: [],
  savedPostId: undefined,
  selectedPostById: {}
};

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_POSTS_DATA:
      return {
        ...state, postsData: action.payload
      };

    case SET_SAVED_POST_ID:
      return {
        ...state, 
        savedPostId: action.payload,
        selectedPostById: state.postsData.find((item) => item?.id === action.payload)
      }
    default: return state;
  }
}

export default reducer;
