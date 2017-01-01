import React, {Component} from "react";
import {connect} from 'react-redux'

class ItemPage extends Component {
  render() {
    return <div>Item Page</div>
  }
}

const mapStateToProps = () => {
  return {};
}

const mapDispatchToProps = () => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage)
