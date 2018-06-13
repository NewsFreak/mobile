import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

class CategoryItem extends PureComponent {
  handleClick = () => {
    const { value, history } = this.props
    const url = `/categories/${value}`
    history.push(url)
  }
  render() {
    const { value, label } = this.props
    return (
      <ListItem button value={value} onClick={this.handleClick}>
        <ListItemText primary={label} />
      </ListItem>
    )
  }
}

CategoryItem.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default withRouter(CategoryItem)
