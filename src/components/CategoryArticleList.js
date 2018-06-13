import React, { Component } from "react"
import { connect } from "react-redux"
import * as categoriesModule from "rdx/modules/categories"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import ArticleItem from "./ArticleItem"
import { uuid } from "util/guuid"
class CategoryArticleList extends Component {
  componentDidMount() {
    const { pathname } = this.props.location
    // pathnames are in the format: categories/:category
    // For some reason the first item (0) is "" so we have to use [2]
    const endpoint = pathname.split("/")[2]
    this.props.fetch(endpoint)
  }
  render() {
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
    return <p>CategoryArticleList</p>
  }
}

CategoryArticleList.propTypes = {
  fetch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  articles: categoriesModule.selectors.getArticles(state),
})

const mapDispatchToProps = dispatch => ({
  fetch: category => dispatch(categoriesModule.fetchCategory(category)),
})

const Connected = connect(mapStateToProps, mapDispatchToProps)(
  CategoryArticleList
)
export default withRouter(Connected)
