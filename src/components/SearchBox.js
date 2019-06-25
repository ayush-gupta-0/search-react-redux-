import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTable } from '../actions/dataActions';

class SearchBox extends Component {
    
  constructor(props) {
    super(props)
    this.handlechange = this.handlechange.bind(this)
  }

  handlechange() {
    var query = (document.getElementById("searchbox")).value;
    var raw = this.props.raw
    this.props.updateTable(query, raw)
  }

  render() {
      return(
        <div>
          <input 
            id="searchbox" 
            name="search" 
            placeholder="Search" 
            value={this.props.search}
            onChange={this.handlechange} 
          />
        </div>
      )
  }
}

SearchBox.propTypes = {
  updateTable: PropTypes.func.isRequired,
  raw: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
  raw: state.cities.raw,
  search: state.data.search
})

export default connect(mapStateToProps, { updateTable })(SearchBox);
