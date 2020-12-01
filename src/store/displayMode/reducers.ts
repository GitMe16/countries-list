import { displayModeValues } from 'constants/defaultValues'
import { LOCAL_STORAGE_KEYS } from 'constants/labels'
import { ACTIONS } from './actions'
import { PropAction } from '../props'

export type DisplayOptions = 'dark' | 'light'

export type DisplayModeProps = {
  themeMode: DisplayOptions
}

const DisplayKeys = Object.keys(displayModeValues)

const prefersDarkMode: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
let currentDisplay = localStorage.getItem(LOCAL_STORAGE_KEYS.DISPLAY_MODE)

let displayJSON = null;
if (currentDisplay && currentDisplay?.length > 0) {
  try {
    displayJSON = JSON.parse(currentDisplay)
  } catch (err) {
    displayJSON = null
  }
}

const initialState: DisplayModeProps = {
  themeMode: displayJSON?.themeMode || (prefersDarkMode ? 'dark' : 'light'),
}

const initPreference = (initProps: DisplayModeProps) => {
  let checkJSON = localStorage.getItem(LOCAL_STORAGE_KEYS.DISPLAY_MODE)
  let finalJSON = null
  if (checkJSON && checkJSON?.length > 0) {
    try {
      finalJSON = JSON.parse(checkJSON)
    } catch (err) {
      finalJSON = null
    }
  }
  if (finalJSON?.themeMode && DisplayKeys.includes(finalJSON?.themeMode)) {
    return
  }
  localStorage.setItem(LOCAL_STORAGE_KEYS.DISPLAY_MODE, JSON.stringify(initProps))
}

const checkSavePreference = (currentTheme: DisplayModeProps, updateProps: DisplayModeProps) => {
  if (!updateProps?.themeMode) {
    return;
  }
  if (currentTheme?.themeMode !== updateProps?.themeMode && DisplayKeys.includes(updateProps?.themeMode)) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.DISPLAY_MODE, JSON.stringify(updateProps))
  }
}

const DisplayMode = (state: DisplayModeProps = initialState, action: PropAction) => {
  switch (action.type) {
    case ACTIONS.INIT:
      initPreference(state)
      return {
        ...state,
        ...action.props,
      }
    case ACTIONS.UPDATE:
      checkSavePreference(state, action.props)
      return {
        ...state,
        ...action.props,
      }
    default:
      return state
  }
}

export default DisplayMode
