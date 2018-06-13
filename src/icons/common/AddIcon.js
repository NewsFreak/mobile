import React from "react"
import SvgIcon from "@material-ui/core/SvgIcon"

const AddIcon = props => {
  return (
    <SvgIcon {...props} style={{ color: props.color || "white" }}>
      <g id="Bounding_Boxes">
        <g id="ui_x5F_spec_x5F_header_copy_3" display="none" />
        <path fill="none" d="M0,0h24v24H0V0z" />
      </g>
      <g id="Outline">
        <g id="ui_x5F_spec_x5F_header" display="none" />
        <path
          d="M13,7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20
		c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z"
        />
      </g>
    </SvgIcon>
  )
}

export default AddIcon
