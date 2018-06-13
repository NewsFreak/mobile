import React, { Component } from "react"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { withRouter } from "react-router-dom"

const styles = {
  root: {
    marginTop: "1.5em",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  button: {
    margin: "1em",
  },
}
class LandingContainer extends Component {
  handleSelect = () => this.props.history.push("/sources")

  render() {
    return (
      <div style={styles.root}>
        <Typography variant="headline" align="center" gutterBottom>
          Welcome to NewsFreak
        </Typography>

        <Typography align="center">
          To get started, pick some sources to start reading
        </Typography>
        <Button
          variant="raised"
          onClick={this.handleSelect}
          color="primary"
          style={styles.button}
        >
          Sources
        </Button>
      </div>
    )
  }
}
export default withRouter(LandingContainer)
