import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import IconMenu from "material-ui/IconMenu"
import IconButton from "material-ui/IconButton"
import MenuItem from "material-ui/MenuItem"
import FilterListIcon from "material-ui/svg-icons/content/filter-list"

import { ARTICLE_TYPES } from "config/values"
import * as sourceModule from "rdx/modules/sources"
import { fetchArticles, resetPagination } from "rdx/modules/articles"

class ArticleTypeToggle extends Component {
  sortTop = () => {
    const { updateArticleType, fetchArticles, resetPagination } = this.props
    updateArticleType(ARTICLE_TYPES.TOP_HEADLINES)
    setTimeout(() => {
      fetchArticles()
      resetPagination()
    }, 500)
  }
  sortEverything = () => {
    const { updateArticleType, fetchArticles, resetPagination } = this.props
    updateArticleType(ARTICLE_TYPES.EVERYTHING)
    setTimeout(() => {
      fetchArticles()
      resetPagination()
    }, 500)
  }
  render() {
    const { articleType } = this.props
    const topHeadlinesDisabled = articleType === ARTICLE_TYPES.TOP_HEADLINES
    const everythingDisabled = articleType === ARTICLE_TYPES.EVERYTHING
    return (
      <IconMenu
        iconButtonElement={
          <IconButton>
            <FilterListIcon color="white" />
          </IconButton>
        }
        targetOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <MenuItem
          onClick={this.sortTop}
          disabled={topHeadlinesDisabled}
          primaryText="Top Headlines"
        />
        <MenuItem
          onClick={this.sortEverything}
          disabled={everythingDisabled}
          primaryText="Everything"
        />
      </IconMenu>
    )
  }
}
ArticleTypeToggle.propTypes = {
  style: PropTypes.any,
  resetPagination: PropTypes.func,
  articleType: PropTypes.string,
  fetchArticles: PropTypes.func,
  updateArticleType: PropTypes.func,
}

const mapStateToProps = state => ({
  articleType: sourceModule.selectors.getArticleType(state),
})
const mapDispatchToProps = dispatch => ({
  updateArticleType: type => dispatch(sourceModule.updateArticleType(type)),
  fetchArticles: () => dispatch(fetchArticles()),
  resetPagination: () => dispatch(resetPagination()),
})

const Connected = connect(mapStateToProps, mapDispatchToProps)(
  ArticleTypeToggle
)

export default Connected
