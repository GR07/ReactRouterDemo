import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './Pages/Index'
import './index.css'

function AppRouter() {
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="">新闻</Link></li>
            <li><Link to="">技能</Link></li>
          </ul>
        </div>
        <div className="rightMain">
          <Route path="/" exact component={Index} />
        </div>
      </div>
    </Router>
  )
}
 
export default AppRouter;