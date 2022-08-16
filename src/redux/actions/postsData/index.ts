import { 
  SET_POSTS_DATA,
  SET_SAVED_POST_ID
} from "../../types/postsData";

export const setPostsData = (dispatch: any, payload: any) => {
  return dispatch({
    type: SET_POSTS_DATA,
    payload: payload
  })
};

export const setSavedPostId = (dispatch: any, payload: any) => {
  return dispatch({
    type: SET_SAVED_POST_ID,
    payload: payload
  })
};