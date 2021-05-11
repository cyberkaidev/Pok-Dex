import * as actionTypes from './actionTypes'

export function changeCurrentTheme() {
  const action: ThemeAction = {
    type: actionTypes.CHANGE_THEME
  }

  return actionTheme(action)
}

export function actionTheme(action: ThemeAction) {
  return (dispatch: DispatchType) => {
    dispatch(action)
  }
}