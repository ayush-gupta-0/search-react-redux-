import React, { Component } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Tabular extends Component {
    
  render() {
    if (this.props.search === "") {
      return(
        <div>
          <Table
            id="tab"
            dataSource={this.props.raw}
            columns={this.props.columns}
            rowKey="ifsc"
            pagination={{pageSize: this.props.size}}
          />
        </div>
      )
    }
    else {
      return(
        <div>
          <Table
            id="tab"
            dataSource={this.props.filtered}
            columns={this.props.columns}
            rowKey="ifsc"
            pagination={{pageSize: this.props.size}}
          />
        </div>
      )
    }
  }
}

Tabular.propTypes = {
  raw: PropTypes.array.isRequired,  
  filtered: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}
  
const mapStateToProps = (state) => ({
  raw: state.cities.raw,
  filtered: state.data.filtered,
  columns: state.cities.columns,
  search: state.data.search,
  size: state.size.size
})
  
export default connect(mapStateToProps)(Tabular);