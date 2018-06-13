import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { fetchArticles } from "rdx/modules/articles"
import { IconButton } from "material-ui"
import { NavigationRefresh } from "material-ui/svg-icons"

const RefreshToggle = props => (
  <IconButton onClick={props.fetchArticles}>
    <NavigationRefresh color="white" />
  </IconButton>
)

RefreshToggle.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
}
const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles()),
})

const Connected = connect(null, mapDispatchToProps)(RefreshToggle)
export default Connected
