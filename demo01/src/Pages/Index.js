import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          uid: 123,
          title: '文章1'
        },
        {
          uid: 456,
          title: '文章2'
        },
        {
          uid: 789,
          title: '文章3'
        }
      ]
    }
    // 函数式重定向
    // this.props.history.push("/home")
  }
  render() { 
    return (
      <div>
        <Redirect to={`/home`} />
        <h2>我是首页</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index + item}>
                  <Link to={`/list/${item.uid}`}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
 
export default Index;