import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './Pages/Index'
import Video from './Pages/Video'
import News from './Pages/News'
import './index.css'

function AppRouter() {
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/video">视频</Link></li>
            <li><Link to="/news">资讯</Link></li>
          </ul>
        </div>
        <div className="rightMain">
          <Route path="/" exact component={Index} />
          <Route path="/video" component={Video} />
          <Route path="/news" component={News} />
        </div>
      </div>
    </Router>
  )
}
 
export default AppRouter;