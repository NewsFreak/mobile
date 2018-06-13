import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as settingsModule from "rdx/modules/settings"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import countries from "util/labels/countries"
import { countryKeys } from "util/labels/keys"

class CountrySelect extends Component {
  handleChange = event => {
    const { value } = event.target
    this.props.updateCountry(value)
  }
  mapCountries() {
    const countryMap = countryKeys.map(key => {
      return (
        <MenuItem key={key} value={key}>
          {countries[key]}
        </MenuItem>
      )
    })
    return countryMap
  }
  render() {
    return (
      <Select value={this.props.country} onChange={this.handleChange}>
        {this.mapCountries()}
      </Select>
    )
  }
}

CountrySelect.propTypes = {
  country: PropTypes.string.isRequired,
  updateCountry: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  country: settingsModule.selectors.getCountry(state),
})

const mapDispatchToProps = dispatch => ({
  updateCountry: country => dispatch(settingsModule.updateCountry(country)),
})

const Connected = connect(mapStateToProps, mapDispatchToProps)(CountrySelect)
export default Connected
