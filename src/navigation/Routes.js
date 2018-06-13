import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import ActiveSourcesContainer from "containers/ActiveSourcesContainer"
import ArticleContainer from "containers/ArticleContainer"
import SearchContainer from "containers/SearchContainer"
import SourcesContainer from "containers/SourcesContainer"
import LandingContainer from "containers/LandingContainer"
import SettingsContainer from "containers/SettingsContainer"
import CategoriesContainer from "containers/CategoriesContainer"
import CategoryArticleList from "components/CategoryArticleList"

const Routes = props => (
  <Switch>
    <Route exact path="/activesources" component={ActiveSourcesContainer} />
    <Route exact path="/sources" component={SourcesContainer} />
    <Route exact path="/search" component={SearchContainer} />
    <Route exact path="/articles" component={ArticleContainer} />
    <Route exact path="/settings" component={SettingsContainer} />
    <Route exact path="/categories" component={CategoriesContainer} />
    <Route exact path="/categories/:category" component={CategoryArticleList} />
    <Route exact path="/" component={LandingContainer} />
    <Redirect to="/" />
  </Switch>
)

export default Routes
