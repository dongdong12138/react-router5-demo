import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  goForward = () => {
    this.props.history.goForward()
  }
  goBack = () => {
    this.props.history.goBack()
  }
  go = (step) => {
    this.props.history.go(step)
  }

  render() {
    console.log('Header this.props:', this.props)
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.goForward}>前进</button>
        <button onClick={this.goBack}>后退</button>
        <button onClick={() => this.go(2)}>前进2步</button>
        <button onClick={() => this.go(-2)}>后退2步</button>
      </div>
    )
  }
}

export default withRouter(Header)
