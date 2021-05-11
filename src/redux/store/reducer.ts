import * as actionTypes from './actionTypes'

const initialState: ThemeState = {
  theme: 'light'
}

const reducer = (
  state: ThemeState = initialState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: state.theme == 'light' ? 'dark' : 'light'
      }
  }

  return state
}

export default reducer