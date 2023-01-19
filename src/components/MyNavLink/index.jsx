import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MyNavLink extends Component {
  render() {
    console.log('this.props:', this.props)
    const {children, to} = this.props
    return (
      <NavLink activeClassName="highlight" className="list-group-item" to={to}>{children}</NavLink>
    )
  }
}

export default MyNavLink
