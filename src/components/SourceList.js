import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import _ from "lodash"
import * as sourceModule from "rdx/modules/sources"
import SourceItem from "./SourceItem"
import { categories, countries, languages } from "util/labels"
import SourceSearch from "components/SourceSearch"
import NoSource from "components/NoSource"

const styles = {
  search: {
    width: "100%",
    fontSize: "2em",
    height: "1em",
    color: "#888888",
    padding: "0.10em",
  },
  noSourceRoot: {
    marginTop: "1.5em",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: "1em",
    marginRight: "1em",
  },
}
class SourceList extends Component {
  componentDidMount() {
    const { sources } = this.props
    this.props.clearSearch()

    if (sources.length === 0) this.props.fetchSources()
  }
  handleSelectNavigation = () => this.props.history.push("/sources")

  renderSearch() {
    return <input style={styles.search} placeholder="Search for a Source" />
  }

  renderList() {
    const { searchResults } = this.props
    if (searchResults.length > 0) {
      return searchResults.map(source => {
        const selected =
          _.indexOf(this.props.activeSources, source.id) > -1 ? true : false
        return (
          <SourceItem
            sourceName={source.name}
            sourceDescription={source.description}
            country={countries[source.country]}
            category={categories[source.category]}
            language={languages[source.language]}
            key={source.id}
            id={source.id}
            selected={selected}
          />
        )
      })
    } else if (this.props.sources) {
      const { sources } = this.props
      return sources.map(source => {
        const selected =
          _.indexOf(this.props.activeSources, source.id) > -1 ? true : false
        return (
          <SourceItem
            sourceName={source.name}
            sourceDescription={source.description}
            country={countries[source.country]}
            category={categories[source.category]}
            language={languages[source.language]}
            key={source.id}
            id={source.id}
            selected={selected}
          />
        )
      })
    }
  }
  renderActive() {
    if (this.props.activeSources.length > 0) {
      const { sources, activeSources } = this.props
      const activeSourceList = sources.filter(source => {
        if (activeSources.indexOf(source.id) > -1) {
          return source
        }
        return null
      })
      return activeSourceList.map(source => {
        return (
          <SourceItem
            sourceName={source.name}
            sourceDescription={source.description}
            country={countries[source.country]}
            category={categories[source.category]}
            language={languages[source.language]}
            key={source.id}
            id={source.id}
            selected={true}
          />
        )
      })
    }
    return <NoSource />
  }

  render() {
    return (
      <React.Fragment>
        {this.props.showActive ? (
          this.renderActive()
        ) : (
          <React.Fragment>
            <SourceSearch />
            {this.renderList()}
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}

SourceList.propTypes = {
  fetchSources: PropTypes.func,
  sources: PropTypes.array,
  showActive: PropTypes.bool,
  searchResults: PropTypes.array,
  clearSearch: PropTypes.func,
}

SourceList.defaultProps = {
  sources: [],
  searchResults: [],
  showActive: false,
}

const mapStateToProps = state => ({
  sources: sourceModule.selectors.getSources(state),
  activeSources: sourceModule.selectors.getActiveSources(state),
  searchResults: sourceModule.selectors.getSearchResults(state),
})

const mapDispatchToProps = dispatch => ({
  fetchSources: () => dispatch(sourceModule.fetchSources()),
  clearSearch: () => dispatch(sourceModule.clearSearch()),
})

const Connected = connect(mapStateToProps, mapDispatchToProps)(SourceList)

export default Connected
