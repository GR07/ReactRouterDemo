import React from 'react'
// BrowserRouter 表示 浏览器路由 外层包裹
// Route 配置路由
// Link 超链接
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Index from './Pages/Index'
import List from './Pages/List'
import Home from './Pages/Home'
// exact 精确匹配 一般首页要使用
function AppRouter() {
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list/123">列表</Link></li>
      </ul>
      <Route path="/" exact component={Index} />
      <Route path="/list/:id" component={List} />
      <Route path="/home" component={Home} />
    </Router>
  )
}

export default AppRouter