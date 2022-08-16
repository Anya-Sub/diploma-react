import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import OpenLabel from "./pages/open-label";
import SignIn from "./pages/sign-in";
import { setPostsData } from "./redux/actions/postsData";
import { connect } from "react-redux";
import { routes } from "./contsants/routes"

import './App.css';

function App({
  setPostsData,
  postsData
}: any) {
  const [cardData, setCardData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [savedPostId, setSavedPostId] = useState(undefined);
  const requestLimit = 120;
  const url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=${requestLimit}`;

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setCardData(response.data);
        setPostsData(response.data)
        setTotalCount(response.data.length);
      })
      .catch((error) => alert(error))
  }, []);

  useEffect(() => {
    console.log('Selected ID: ', savedPostId)
  }, [savedPostId])

  return (
    <div className="App">
      <Routes>
        <Route path={routes.home} element={
          <Main 
            cardData={postsData.postsData}
            totalCount={totalCount}
            requestLimit={requestLimit}
            setSavedPostId={setSavedPostId}
          />
        }/>
        <Route path={routes.openLabel} element={
        <OpenLabel
          savedPostId={savedPostId}
          cardData={cardData}
        />}/>
        <Route path={routes.signIn} element={<SignIn />}/>
      </Routes>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    setPostsData: state.setPostsData,
    ...state
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setPostsData: (payload) => setPostsData(dispatch, payload)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
