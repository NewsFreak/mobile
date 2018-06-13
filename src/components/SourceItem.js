import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as sourceModule from "rdx/modules/sources"

import { Card, CardActions, CardHeader, CardText } from "material-ui/Card"
import RaisedButton from "material-ui/RaisedButton"
import Chip from "material-ui/Chip"

const styles = {
  card: {
    marginTop: ".5em",
    marginBottom: ".5em",
    marginLeft: "0.1em",
    marginRight: "0.1em",
  },
}
class SourceItem extends Component {
  handleAdd = () => this.props.updateActiveSources(this.props.id)
  handleRemove = () => this.props.dropSource(this.props.id)
  render() {
    return (
      <Card style={styles.card}>
        <CardHeader
          title={this.props.sourceName}
          actAsExpander={true}
          showExpandableButton={true}
        />

        <CardActions>
          {this.props.selected ? (
            <RaisedButton
              label="Remove"
              secondary
              onClick={this.handleRemove}
            />
          ) : (
            <RaisedButton label="Add" primary onClick={this.handleAdd} />
          )}
        </CardActions>
        <CardText expandable={true}>
          <div style={{ display: "flex" }}>
            <Chip>{this.props.language}</Chip>
            <Chip>{this.props.country}</Chip>
            <Chip>{this.props.category}</Chip>
          </div>
          {this.props.sourceDescription}
        </CardText>
      </Card>
    )
  }
}

SourceItem.propTypes = {
  id: PropTypes.string,
  sourceName: PropTypes.string,
  sourceDescription: PropTypes.string,
  selected: PropTypes.bool,
  country: PropTypes.string,
  category: PropTypes.string,
  language: PropTypes.string,
  onSelect: PropTypes.func,
}

SourceItem.defaultProps = {
  sourceName: "Source Name",
  sourceDescription: "Source Description",
  selected: false,
}
const mapDispatchToProps = dispatch => ({
  updateActiveSources: source =>
    dispatch(sourceModule.updateActiveSources([source])),
  dropSource: source => dispatch(sourceModule.dropSource(source)),
})

const Connected = connect(null, mapDispatchToProps)(SourceItem)

export default Connected
