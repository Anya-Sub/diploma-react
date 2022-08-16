import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import OpenLabel from "./pages/open-label";
import SignIn from "./pages/sign-in";
import { setPostsData } from "./redux/actions/postsData";
import { connect } from "react-redux";
import { routes } from "./contsants/routes"
import { request } from './contsants/requestLimits';

import './App.css';

function App({
  setPostsData,
  posts
}: any) {
  const [savedPostId, setSavedPostId] = useState(undefined);
  const url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=${request.limit}`;

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setPostsData(response.data)
      })
      .catch((error) => alert(error))
  }, []);

  useEffect(() => {
    console.log('Selected ID: ', savedPostId)
  }, [savedPostId])

  useEffect(() => {
    console.log('Posts in app', posts)
  }, [posts])

  return (
    <div className="App">
      <Routes>
        <Route path={routes.home} element={
          <Main />
        }/>
        <Route path={routes.openLabel} element={
          <OpenLabel />
        }/>
        <Route path={routes.signIn} element={<SignIn />}/>
      </Routes>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    setPostsData: state.setPostsData,
    posts: state.postsData.postsData,
    ...state
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setPostsData: (payload) => setPostsData(dispatch, payload)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
