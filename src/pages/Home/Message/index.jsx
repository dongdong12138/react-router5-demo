import React, { Component } from 'react'

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
      <ul>
        {
          messageList.map(message => {
            return <li key={message.id}>{message.title}</li>
          })
        }
      </ul>
    )
  }
}

export default Message
