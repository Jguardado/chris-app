import react, {Component} from "react";
import {connect} from 'react-redux'

class ProductList extends Component {
  render() {
    return <div>Product list</div>
  }
}

mapStateToProps = () => {
  return {};
}

mapDispatchToProps = () => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
