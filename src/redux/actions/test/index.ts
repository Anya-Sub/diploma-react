import { TEST_TYPE } from "../../types/test"

export const testFunc = (dispatch: any) => {
  return dispatch({
    type: TEST_TYPE
  })
}