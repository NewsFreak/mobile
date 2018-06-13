import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import _ from "lodash"
import { selectors, updateSearchResults } from "rdx/modules/sources"

const styles = {
  search: {
    width: "100%",
    fontSize: "2em",
    height: "1em",
    color: "#888888",
    padding: "0.10em",
  },
}
class SourceSearch extends Component {
  state = {
    isLoading: false,
    value: "",
  }
  resetSearch = () =>
    this.setState({
      isLoading: false,
    })
  handleInputChange = e => {
    const { value } = e.target
    this.setState(
      {
        value,
      },
      this.handleSearchChange()
    )
  }
  handleSearchChange = e => {
    const { value } = this.state
    const { sources, updateSearchResults } = this.props
    this.setState({
      isLoading: true,
    })
    setTimeout(() => {
      if (value.length < 1) {
        return this.resetSearch()
      }
      const re = new RegExp(_.escapeRegExp(value), "i")
      const isMatch = result => re.test(result.name)
      const results = _.filter(sources, isMatch)
      updateSearchResults(results)
      this.setState({
        isLoading: false,
      })
    }, 100)
  }
  renderInputBox() {
    return (
      <input
        style={styles.search}
        onChange={this.handleInputChange}
        placeholder="Search for a Source"
      />
    )
  }
  render() {
    return this.renderInputBox()
  }
}
SourceSearch.propTypes = {
  updateSearchResults: PropTypes.func,
  sources: PropTypes.array,
}
const mapStateToProps = state => ({
  sources: selectors.getSources(state),
})
const mapDispatchToProps = dispatch => ({
  updateSearchResults: result => dispatch(updateSearchResults(result)),
})
const Connected = connect(mapStateToProps, mapDispatchToProps)(SourceSearch)
export default Connected
