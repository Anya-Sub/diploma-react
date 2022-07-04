import { 
  TEST_TYPE 
} from "../../types/test"

const INITIAL_STATE = {
  testValue: 0
}
const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case TEST_TYPE:
      console.log('I worked successfully!')
      return {
        ...state, testValue: 1
    };
    default: return state;
  }
}

export default reducer;
