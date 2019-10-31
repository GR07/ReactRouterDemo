import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './Pages/Index'
import Video from './Pages/Video'
import News from './Pages/News'
import './index.css'

function AppRouter() {
  let routeConfig = [
    {
      path: '/',
      title: '首页',
      exact: true,
      component: Index
    },
    {
      path: '/video',
      title: '视频',
      exact: false,
      component: Video
    },
    {
      path: '/news',
      title: '资讯',
      exact: false,
      component: News
    }
  ]
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          <ul>
            {
              routeConfig.map((item, index) => {
                return (
                  <li key={index+item}><Link to={item.path}>{item.title}</Link></li>
                )
              })
            }
          </ul>
        </div>
        <div className="rightMain">
          {
            routeConfig.map((item, index) => {
              return (
                <Route key={index+item} path={item.path} exact={item.exact} component={item.component}></Route>
              )
            })
          }
        </div>
      </div>
    </Router>
  )
}
 
export default AppRouter;