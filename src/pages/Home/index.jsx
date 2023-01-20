import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'

class Home extends Component {
  render() {
    // console.log('Home this.props:', this.props)
    return (
      <div>

        <h3>我是Home的内容</h3>

        {/*路由链接*/}
        <ul className="nav nav-tabs">
          <li><MyNavLink to="/home/news">News</MyNavLink></li>
          <li><MyNavLink to="/home/message">Message</MyNavLink></li>
        </ul>

        {/*注册路由*/}
        <Switch>
          <Route path="/home/news" component={News}/>
          <Route path="/home/message" component={Message}/>
          <Redirect to="/home/news"/>
        </Switch>

      </div>
    )
  }
}

export default Home
