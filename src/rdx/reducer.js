// Root reducer
import { persistCombineReducers } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { reducer as sources } from "./modules/sources"
import { reducer as articles } from "./modules/articles"
import { reducer as categories } from "./modules/categories"
import { reducer as settings } from "./modules/settings"
// Enable this later when we do search for mobile
// import { reducer as search } from "./modules/search"

const config = {
  key: "primary",
  storage,
}

const reducers = {
  sources,
  articles,
  categories,
  settings,
  // search,
}
export default persistCombineReducers(config, reducers)
