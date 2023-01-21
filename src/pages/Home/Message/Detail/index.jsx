import React, { Component } from 'react'

const contentArr = [
  {id: '001', content: '内容1'},
  {id: '002', content: '内容2'},
  {id: '003', content: '内容3'},
]

class Detail extends Component {
  render() {
    console.log('Detail this.props:', this.props)
    const {id, title} = this.props.match.params
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
