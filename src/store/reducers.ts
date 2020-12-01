import { combineReducers } from 'redux'
import DisplayMode, { DisplayModeProps } from './displayMode/reducers'

export type RootState = {
  DisplayMode: DisplayModeProps,
}

export const Reducers = combineReducers({
  DisplayMode,
})
