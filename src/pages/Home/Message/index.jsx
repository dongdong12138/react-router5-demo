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

                  {/*向路由组件传递 params 参数*/}
                  <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>

                  {/*向路由组件传递 search 参数*/}
                  {/*<Link to={`/home/message/detail?id=${message.id}&title=${message.title}`}>{message.title}</Link>*/}

                  {/*向路由组件传递 state 参数*/}
                  {/*<Link replace={true} to={{pathname: '/home/message/detail', state: {id: message.id, title: message.title}}}>*/}
                  {/*  {message.title}*/}
                  {/*</Link>*/}

                </li>
              )
            })
          }
        </ul>
        <hr/>

        {/*声明接收 params 参数*/}
        <Route path="/home/message/detail/:id/:title" component={Detail}/>

        {/*search 参数无需声明接收，正常注册路由即可*/}
        {/*<Route path="/home/message/detail" component={Detail}/>*/}

        {/*state 参数无需声明接收，正常注册路由即可*/}
        {/*<Route path="/home/message/detail" component={Detail}/>*/}

      </div>
    )
  }
}

export default Message
