import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Detail from './Detail'

class Message extends Component {
  state = {
    messageList: [
      {id: '001', title: '消息1'},
      {id: '002', title: '消息2'},
      {id: '003', title: '消息3'},
    ]
  }

  render() {
    const {messageList} = this.state
    return (
      <div>
        <ul>
          {
            messageList.map(message => {
              return (
                <li key={message.id}>
                  <Link to="/home/message/detail">{message.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        <Route path="/home/message/detail" component={Detail}/>
      </div>
    )
  }
}

export default Message
