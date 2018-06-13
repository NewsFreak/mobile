// Categories Module
import axios from "axios"
import { categories } from "util/url"
const initialState = {
  results: {
    articles: [],
  },
  page: 1,
}

const types = {
  CATEGORY_LOADING: "CATEGORIES/CATEGORY_LOADING",
  CATEGORY_SUCCESS: "CATEGORIES/CATEGORY_LOAD_SUCCESS",
  CATEGORY_FAIL: "CATEGORIES/CATEGORY_LOAD_FAIL",
}

const actions = {
  categoryLoading: () => ({
    type: types.CATEGORY_LOADING,
  }),
  categoryLoadSuccess: data => ({
    data,
    type: types.CATEGORY_SUCCESS,
  }),
  categoryLoadFail: error => ({
    error,
    type: types.CATEGORY_FAIL,
  }),
}

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.CATEGORY_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case types.CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.data,
      }
    case types.CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}

export const selectors = {
  getArticles: state => state.categories.results.articles,
}

export function fetchCategory(category) {
  return (dispatch, getState) => {
    const { defaultCountry } = getState().settings
    const url = categories(category, defaultCountry)
    dispatch(actions.categoryLoading())
    axios
      .get(url)
      .then(resp => dispatch(actions.categoryLoadSuccess(resp.data)))
      .catch(err => dispatch(actions.categoryLoadFail(err)))
  }
}
