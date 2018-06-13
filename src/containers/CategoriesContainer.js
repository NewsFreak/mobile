import React, { Component } from "react"
import List from "@material-ui/core/List"
import CategoryItem from "components/CategoryItem"
import { CATEGORIES } from "config/values"

class CategoriesContainer extends Component {
  handleClick = (e, data) => console.log(e.target)
  renderList() {
    return (
      <List component="nav">
        <CategoryItem value={CATEGORIES.BUISNESS} label="Buisness" />
        <CategoryItem value={CATEGORIES.ENTERTAINMENT} label="Entertainment" />
        <CategoryItem value={CATEGORIES.GENERAL} label="General" />
        <CategoryItem value={CATEGORIES.HEALTH} label="Health" />
        <CategoryItem value={CATEGORIES.SCIENCE} label="Science" />
        <CategoryItem value={CATEGORIES.SPORTS} label="Sports" />
        <CategoryItem value={CATEGORIES.TECH} label="Tech" />
      </List>
    )
  }
  render() {
    return this.renderList()
  }
}

export default CategoriesContainer
