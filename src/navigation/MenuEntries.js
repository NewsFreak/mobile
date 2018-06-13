import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"

import { withRouter } from "react-router-dom"
import Divider from "@material-ui/core/Divider"

import ListSubheader from "@material-ui/core/ListSubheader"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"

import ArticleIcon from "icons/ArticleIcon"
import SettingsIcon from "icons/SettingsIcon"
import ActiveSourcesIcon from "icons/ActiveSourcesIcon"
import AddIcon from "icons/common/AddIcon"
import CategoryIcon from "icons/CategoryIcon"

const styles = {
  menuItem: {
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "1rem",
    fontWeight: "400",
    fontFamily: "Roboto",
  },
}
class MenuEntries extends Component {
  handleSelect = (e, data) => {
    this.props.history.push(e.target.id)
    this.props.onSelect()
  }
  render() {
    return (
      <Fragment>
        <List
          component="nav"
          subheader={<ListSubheader>By Publication</ListSubheader>}
        >
          <ListItem
            button
            onClick={this.handleSelect}
            id="/articles"
            style={styles.menuItem}
          >
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            Articles
          </ListItem>

          <ListItem
            id="/activesources"
            onClick={this.handleSelect}
            button
            className="MuiTypography-subheading-21"
          >
            <ListItemIcon>
              <ActiveSourcesIcon />
            </ListItemIcon>
            My Sources
          </ListItem>

          <ListItem
            id="/sources"
            onClick={this.handleSelect}
            button
            className="MuiTypography-subheading-21"
          >
            <ListItemIcon>
              <AddIcon color="grey" />
            </ListItemIcon>
            Add Sources
          </ListItem>
        </List>
        <Divider />
        <List
          component="nav"
          subheader={<ListSubheader>Top Headlines</ListSubheader>}
        >
          <ListItem
            id="/categories"
            onClick={this.handleSelect}
            button
            className="MuiTypography-subheading-21"
          >
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            Categories
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem
            id="/settings"
            onClick={this.handleSelect}
            button
            className="MuiTypography-subheading-21"
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            Settings
          </ListItem>
        </List>
      </Fragment>
    )
  }
}
MenuEntries.propTypes = {
  onSelect: PropTypes.func.isRequired,
}
export default withRouter(MenuEntries)
