import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  { changeCity } from '../actions/cityActions';
import { Dropdown, DropdownItem} from 'reactstrap';

class DropDown extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.handleChange()
  }

  handleChange() {  
    var e = document.getElementById("Drop");
    var drCity = e.options[e.selectedIndex].value
    this.props.changeCity(drCity);
  }
  
  render() {
    return(
      <select id="Drop" onChange={this.handleChange}>
        <option value="BANGALORE">Bangalore</option>
        <option value="CHENNAI">Chennai</option>
        <option value="DELHI">Delhi</option>
        <option value="PUNE">Pune</option>
        <option value="MUMBAI">Mumbai</option>
      </select>
    )
  }
}

DropDown.propTypes = {
    changeCity: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired,
    raw: PropTypes.array.isRequired
  }
  
  const mapStateToProps = (state) => ({
    city: state.cities.city,
    raw: state.cities.raw
  })
  
  export default connect(mapStateToProps, { changeCity })(DropDown);
