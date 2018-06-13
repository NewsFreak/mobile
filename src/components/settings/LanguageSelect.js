import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as settingsModule from "rdx/modules/settings"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import languages from "util/labels/languages"
import { languageKeys } from "util/labels/keys"

class CountrySelect extends Component {
  handleChange = event => {
    const { value } = event.target
    this.props.updateLanguage(value)
  }
  mapLanguages() {
    const languageMap = languageKeys.map(key => {
      return (
        <MenuItem key={key} value={key}>
          {languages[key]}
        </MenuItem>
      )
    })
    return languageMap
  }
  render() {
    return (
      <Select value={this.props.language} onChange={this.handleChange}>
        {this.mapLanguages()}
      </Select>
    )
  }
}

CountrySelect.propTyps = {
  language: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  language: settingsModule.selectors.getLanguage(state),
})

const mapDispatchToProps = dispatch => ({
  updateLanguage: language => dispatch(settingsModule.updateLanguage(language)),
})

const Connected = connect(mapStateToProps, mapDispatchToProps)(CountrySelect)
export default Connected
