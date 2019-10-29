import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <h2>我是列表{this.state.id}</h2> );
  }
  // 这个时候接收路由传递过来的参数在 props 里
  componentDidMount() {
    // id 就是定义规则的时候 <Route> 设定的 
    let tempId = this.props.match.params.id
    this.setState({id: tempId})
  }
}
 
export default List;