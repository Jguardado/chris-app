import React, {Component} from "react";
import {connect} from 'react-redux'

class Header extends Component {
  render() {
    return <div>Header</div>
  }
}

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = () => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
