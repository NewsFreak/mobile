import React from "react"
import SourceList from "components/SourceList"
const styles = {
  root: {},
}
const ActiveSourcesContainer = () => (
  <div style={styles.root}>
    <SourceList showActive />
  </div>
)

export default ActiveSourcesContainer
