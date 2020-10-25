import React from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'
import Createcrew from './routes/createCrew'
import Mypage from './routes/Mypage'
import Extype from './routes/Extype'
import Detailinfo from './routes/DetailInfo'
import Crewlist from './routes/Crewlist'
import Excrewlist from './routes/Excrewlist'
import Searchcrewlist from './routes/Searchcrewlist'
import Crewinfo from './component/crew/Crewinfo'
import Chat from './routes/Chatroom'
// import Crew from './component/Crews';
import Header from './component/header/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './css/App.css'

function App() {
  return (
    <BrowserRouter>
      <div style={{ margin: 20 }}>
        <Header />
        {/* <div style={{ display:'inline' }}> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/createcrew" component={Createcrew} />
          <Route path="/mypage" component={Mypage} />
          <Route path="/exercisecrew" component={Extype} />
          <Route exact path="/crewlist" component={Crewlist} />
          <Route path="/crewlist/:idexercise" component={Excrewlist} />
          <Route path="/searchresult/:searchtype/:searchword" component={Searchcrewlist} />
          <Route path="/crewdetail/:idcrew" component={Detailinfo} />
          <Route path="/chat" component={Chat} />
        </Switch>
        {/* </div> */}
      </div>
    </BrowserRouter>
  )
}

export default App;