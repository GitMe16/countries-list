import { DisplayModeProps } from './reducers'

export const ACTIONS = {
  INIT: 'DISPLAY_MODE_INIT',
  UPDATE: 'DISPLAY_MODE_UPDATE',
}

export function init() {
  return {
    type: ACTIONS.INIT,
  }
}

export function update(props: DisplayModeProps) {
  return {
    type: ACTIONS.UPDATE,
    props,
  }
}
