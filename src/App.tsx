import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import OpenLabel from "./pages/open-label";
import SignIn from "./pages/sign-in";
import { testFunc } from "./redux/actions/test";
import { connect } from "react-redux";

import './App.css';


function App({
  testFunc
}: any) {
  return (
    <div className="App">
     {/* <Link to="/Main">main</Link>
     <Link to="/Openlabel">Open label</Link>
     <Link to="/Singin">sign in</Link> */}
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/open-label" element={<OpenLabel />}/>
        <Route path="/sign-in" element={<SignIn />}/>
      </Routes>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    testFunc: state.testFunc,
    ...state
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    testFunc: () => testFunc(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
