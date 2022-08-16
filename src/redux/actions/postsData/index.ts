import { 
  SET_POSTS_DATA
} from "../../types/postsData";

export const setPostsData = (dispatch: any, payload: any) => {
  return dispatch({
    type: SET_POSTS_DATA,
    payload: payload
  })
};
