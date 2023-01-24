import React, { Component } from 'react'
import qs from 'qs'

const contentArr = [
  {id: '001', content: '内容1'},
  {id: '002', content: '内容2'},
  {id: '003', content: '内容3'},
]

class Detail extends Component {
  render() {
    console.log('Detail this.props:', this.props)

    // 获取 params 参数
    // const {id, title} = this.props.match.params

    // 获取并解析 search 参数
    const {search} = this.props.location
    const {id, title} = qs.parse(search.slice(1))

    const {content} = contentArr.filter(item => item.id === id)[0]
    return (
      <ul>
        <li>Id: {id}</li>
        <li>Title: {title}</li>
        <li>Content: {content}</li>
      </ul>
    )
  }
}

export default Detail
