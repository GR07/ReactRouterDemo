import React from 'react';
import {Route, Link} from 'react-router-dom'
import It from './news/It'
import Money from './news/Money'
import Game from './news/Game'
function News() {
  return (
    
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/news/It">It</Link></li>
          <li><Link to="/news/Money">Money</Link></li>
          <li><Link to="/news/Game">Game</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>资讯内容</h3></div>
        <Route path="/news/It" component={It} />
        <Route path="/news/Money" component={Money} />
        <Route path="/news/Game" component={Game} />
      </div>
    </div>
  )
}

export default News