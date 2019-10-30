import React from 'react';
import {Route, Link} from 'react-router-dom'
import Code from './video/Code'
import Guitar from './video/Guitar'
import Vlog from './video/Vlog'
function Video() {
  return (
    
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/video/guitar">Guitar</Link></li>
          <li><Link to="/video/code">Code</Link></li>
          <li><Link to="/video/vlog">Vlog</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>视频内容</h3></div>
        <Route path="/video/guitar" component={Guitar} />
        <Route path="/video/code" component={Code} />
        <Route path="/video/vlog" component={Vlog} />
      </div>
    </div>
  )
}

export default Video