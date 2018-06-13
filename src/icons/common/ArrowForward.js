import React from "react"
import SvgIcon from "@material-ui/core/SvgIcon"

const ArrowForward = props => {
  return (
    <SvgIcon {...props} style={{ color: props.color || "white" }}>
      <g id="Bounding_Boxes">
        <path opacity="0.87" fill="none" d="M24,24H0L0,0l24,0V24z" />
      </g>
      <g id="Outline_1_">
        <path d="M6.49,20.13l1.77,1.77l9.9-9.9l-9.9-9.9L6.49,3.87L14.62,12L6.49,20.13z" />
      </g>
    </SvgIcon>
  )
}

export default ArrowForward
