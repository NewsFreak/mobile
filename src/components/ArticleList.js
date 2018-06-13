import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as articleModule from "rdx/modules/articles"
import { selectors as sourceSelector } from "rdx/modules/sources"
import ArticleItem from "./ArticleItem"
import ArticleListPagination from "./ArticleListPagination"
import NoSource from "components/NoSource"
import { uuid } from "util/guuid"

class ArticleList extends Component {
  componentDidMount() {
    if (this.props.activeSources.length > 0) {
      this.props.fetchArticles()
    }
  }
  renderList() {
    if (this.props.articles) {
      const { articles } = this.props
      return articles.map(article => {
        return (
          <ArticleItem
            title={article.title}
            author={article.author}
            publication={article.source.name}
            description={article.description}
            imageUrl={article.urlToImage}
            articleUrl={article.url}
            date={article.publishedAt}
            key={uuid()}
          />
        )
      })
    }
    return <p>No Data :(</p>
  }

  render() {
    if (this.props.activeSources.length > 0) {
      return (
        <Fragment>
          {this.renderList()}
          <ArticleListPagination onPageClick={this.props.fetchArticles} />
        </Fragment>
      )
    }
    return <NoSource />
  }
}
ArticleList.propTypes = {
  articles: PropTypes.array,
  fetchArticles: PropTypes.func,
}
const mapStateToProps = state => ({
  articles: articleModule.selectors.getArticles(state),
  activeSources: sourceSelector.getActiveSources(state),
})

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(articleModule.fetchArticles()),
})

const Connected = connect(mapStateToProps, mapDispatchToProps)(ArticleList)
export default Connected
