import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText,
} from "material-ui/Card"
import RaisedButton from "material-ui/RaisedButton"
import Moment from "moment"

const styles = {
  card: {
    margin: "0.5em",
  },
}
class ArticleItem extends Component {
  parseDate(date) {
    const moment = Moment(date)
    return moment.format("dddd, MMMM Do YYYY, h:mm:ss a")
  }
  renderCard() {
    const {
      imageUrl,
      title,
      author,
      publication,
      description,
      articleUrl,
      date,
    } = this.props
    let authorString = ""
    if (author) {
      authorString = `${author}, ${publication}`
    } else {
      authorString = `${publication}`
    }
    const parsedDate = this.parseDate(date)
    return (
      <Card style={styles.card}>
        {imageUrl && (
          <CardMedia>
            <img src={imageUrl} alt="articleImg" />
          </CardMedia>
        )}
        <CardTitle title={title} subtitle={parsedDate} />
        <CardText>
          {<b>[{authorString}]</b>} {description}
        </CardText>
        <CardActions>
          <RaisedButton label="Open in Web" primary href={articleUrl} />
        </CardActions>
      </Card>
    )
  }
  render() {
    return this.renderCard()
  }
}

ArticleItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  publication: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  articleUrl: PropTypes.string,
  date: PropTypes.string,
}

ArticleItem.defaultProps = {
  title: "Title",
  author: "Jane Smith",
  publication: "ONN",
  description: "Florida man magically grows flowers",
  imageUrl: "#",
  articleUrl: "#",
}

export default ArticleItem
