import React, { Component } from "react"
import { connect } from "react-redux"
import { selectors } from "rdx/modules/sources"
import PropTypes from "prop-types"
import { AppBar, IconButton } from "material-ui"
import { NavigationMenu } from "material-ui/svg-icons"
import Button from "@material-ui/core/Button"
import ArticleTypeToggle from "components/ArticleTypeToggle"
import RefreshToggle from "components/RefreshToggle"
import AddIcon from "icons/common/AddIcon"
import ArrowForward from "icons/common/ArrowForward"
import { withRouter } from "react-router-dom"

const styles = {
  toggleContainer: {
    display: "flex",
  },
  button: {
    color: "white",
    marginTop: "0.3em",
  },
}
class HeaderContainer extends Component {
  handleActiveSources = () => this.props.history.push("/sources")
  handleArticles = () => this.props.history.push("/articles")

  renderRight() {
    const { location } = this.props
    switch (location.pathname) {
      case "/articles": {
        return (
          <div style={styles.toggleContainer}>
            <RefreshToggle />
            <ArticleTypeToggle />
          </div>
        )
      }
      case "/activesources": {
        return (
          <div style={styles.toggleContainer}>
            <Button
              style={styles.button}
              size="small"
              onClick={this.handleActiveSources}
            >
              <AddIcon />
              &nbsp;Add Sources
            </Button>
          </div>
        )
      }
      case "/sources": {
        if (this.props.activeSources.length > 0) {
          return (
            <Button
              style={styles.button}
              size="small"
              onClick={this.handleArticles}
            >
              See Articles&nbsp;
              <ArrowForward />
            </Button>
          )
        }
        break
      }
      default: {
        return null
      }
    }
  }
  render() {
    return (
      <AppBar
        iconElementLeft={
          <IconButton>
            <NavigationMenu />
          </IconButton>
        }
        onLeftIconButtonClick={this.props.onClick}
        iconElementRight={this.renderRight()}
      />
    )
  }
}
HeaderContainer.propTypes = {
  onClick: PropTypes.func,
  activeSources: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  activeSources: selectors.getActiveSources(state),
})

const Connected = connect(mapStateToProps)(HeaderContainer)

export default withRouter(Connected)
