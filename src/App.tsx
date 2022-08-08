import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import OpenLabel from "./pages/open-label";
import SignIn from "./pages/sign-in";
import { testFunc } from "./redux/actions/test";
import { connect } from "react-redux";
import { routes } from "./contsants/routes"

import './App.css';

function App({
  testFunc
}: any) {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.home} element={<Main />}/>
        <Route path={routes.openLabel} element={<OpenLabel />}/>
        <Route path={routes.signIn} element={<SignIn />}/>
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
