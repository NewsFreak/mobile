import React from "react"
import PropTypes from "prop-types"

import { AppBar } from "material-ui"
import Drawer from "@material-ui/core/Drawer"

const SidebarContainer = props => (
  <Drawer open={props.open} anchor="left" variant="temporary">
    <React.Fragment>
      <AppBar
        title="NewsFreak"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonClick={props.onClick}
      />
      {props.children}
    </React.Fragment>
  </Drawer>
)

SidebarContainer.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

SidebarContainer.defaultProps = {
  open: false,
}
export default SidebarContainer
