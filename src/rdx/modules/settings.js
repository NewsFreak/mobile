const initialState = {
  defaultLanguage: "en",
  defaultCountry: "us",
}

const types = {
  UPDATE_LANGUAGE: "SETTINGS/UPDATE_LANGUAGE",
  UPDATE_COUNTRY: "SETTINGS/UPDATE_COUNTRY",
}

const actions = {
  updateLanguage: language => ({
    language,
    type: types.UPDATE_LANGUAGE,
  }),
  updateCountry: country => ({
    country,
    type: types.UPDATE_COUNTRY,
  }),
}

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.UPDATE_COUNTRY:
      return {
        ...state,
        defaultCountry: action.country,
      }
    case types.UPDATE_LANGUAGE:
      return {
        ...state,
        defaultLanguage: action.language,
      }
    default:
      return state
  }
}

export const selectors = {
  getCountry: state => state.settings.defaultCountry,
  getLanguage: state => state.settings.defaultLanguage,
}

export function updateLanguage(language) {
  return dispatch => {
    dispatch(actions.updateLanguage(language))
  }
}

export function updateCountry(country) {
  return dispatch => {
    dispatch(actions.updateCountry(country))
  }
}
