import React, { Component, Fragment } from "react"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import LanguageSelect from "components/settings/LanguageSelect"
import CountrySelect from "components/settings/CountrySelect"
import VERSION from "config/version"

class SettingsContainer extends Component {
  render() {
    return (
      <Fragment>
        <List component="nav">
          <ListItem>
            <ListItemText primary="Language" />
            <LanguageSelect />
          </ListItem>
          <ListItem>
            <ListItemText primary="Country" />
            <CountrySelect />
          </ListItem>
          <ListItem>
            <ListItemText primary="Version" />
            <p>{VERSION}</p>
          </ListItem>
        </List>
      </Fragment>
    )
  }
}

export default SettingsContainer
