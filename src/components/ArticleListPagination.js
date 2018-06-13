import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as articleModule from "rdx/modules/articles"
import Button from "@material-ui/core/Button"
const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    margin: "0.5em",
  },
}
class ArticleListPagination extends Component {
  nextPage = () => {
    this.props.updatePage(this.props.page + 1)
    this.props.onPageClick()
  }
  previousPage = () => {
    this.props.updatePage(this.props.page - 1)
    this.props.onPageClick()
  }
  render() {
    const { page, totalPages } = this.props
    return (
      <div style={styles.root}>
        <Button
          variant="raised"
          color="primary"
          disabled={page === 1}
          style={styles.button}
          onClick={this.previousPage}
        >
          Previous Page
        </Button>
        <Button
          variant="raised"
          color="primary"
          disabled={page === totalPages}
          style={styles.button}
          onClick={this.nextPage}
        >
          Next Page
        </Button>
      </div>
    )
  }
}
ArticleListPagination.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  updatePage: PropTypes.func.iSRequired,
  onPageClick: PropTypes.func, // optional callback
}
ArticleListPagination.defaultProps = {
  onPageClick: () => {},
}
const mapStateToProps = state => ({
  page: articleModule.selectors.getPage(state),
  totalPages: articleModule.selectors.getTotalPages(state),
})

const mapDispatchToProps = dispatch => ({
  updatePage: page => dispatch(articleModule.updatePage(page)),
})

const Connected = connect(mapStateToProps, mapDispatchToProps)(
  ArticleListPagination
)
export default Connected
