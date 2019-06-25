import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSize } from '../actions/pageActions';

class PageSize extends Component {

    constructor(props) {
        super(props)
        this.handleSize = this.handleSize.bind(this)
    }

    handleSize() {
      var size = parseInt((document.getElementById("sizebox")).value);
      this.props.changeSize(size)
    }
  render() {
    return(
      <input 
        type="number" 
        id="sizebox" 
        name="pagesizebox" 
        placeholder="Page size" 
        value={this.props.size}
        onChange={this.handleSize}
      />
    )
  }
}

PageSize.propTypes = {
    changeSize: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired
  }
    
  const mapStateToProps = (state) => ({
    size: state.size.size
  })
    
  export default connect(mapStateToProps, { changeSize })(PageSize);