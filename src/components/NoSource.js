import React, { PureComponent } from "react"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { withRouter } from "react-router-dom"

const styles = {
  noSourceRoot: {
    marginTop: "1.5em",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  noSourceButton: {
    margin: "1em",
  },
}

class NoSource extends PureComponent {
  handleSelect = () => this.props.history.push("/sources")

  render() {
    return (
      <div style={styles.noSourceRoot}>
        <Typography align="center">
          Looks like you don't have any active sources, pick some sources to
          start reading
        </Typography>
        <Button
          variant="raised"
          onClick={this.handleSelect}
          color="primary"
          style={styles.noSourceButton}
        >
          Sources
        </Button>
      </div>
    )
  }
}

export default withRouter(NoSource)
