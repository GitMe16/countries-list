import Icon from '@ant-design/icons'
import { Button, Tooltip, Typography } from 'antd'
import { ReactComponent as DarkMode } from 'assets/images/dark-mode.svg'
import { ReactComponent as LightMode } from 'assets/images/light-mode.svg'
import { ReactComponent as WorldIcon } from 'assets/images/world.svg'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { Actions } from 'store'
import { DisplayOptions } from 'store/displayMode/reducers'
import { RootState } from 'store/reducers'

import React from 'react'

const Header: React.FunctionComponent = () => {
  const { Title } = Typography
  const dispatch = useDispatch()
  const displayMode = useSelector<RootState, DisplayOptions | null>((state) => state.DisplayMode.themeMode)

  const changeDisplayMode = () => {
    let newMode: DisplayOptions = 'light'
    if (displayMode === 'light') {
      newMode = 'dark'
    }
    dispatch(Actions.DisplayMode.update({ themeMode: newMode }))
  }

  return (
    <div
      className={clsx(
        'header', 'flex',
        'align-center', 'justify-between',
        {dark: displayMode === 'dark'}
      )}
    >
      <div className="filler">&nbsp;</div>
      <div className="flex align-center">
        <WorldIcon className="icon" />
        <Title
          className={clsx(
            'title',
            {dark: displayMode === 'dark'}
          )}
          level={3}
        >
          ALL-ROUNDER
        </Title>
      </div>
      <div>
        <Tooltip title="Change display mode">
          <Button
            type="text"
            className={clsx(
              'flex', 'align-center',
              'justify-center', 'icon-btn',
              {dark: displayMode === 'dark'}
            )}
            shape="circle"
            icon={
              <Icon
                className={clsx(
                  'mode-icon',
                  'ant-typography-secondary',
                  {dark: displayMode === 'dark'}
                )}
                component={
                  displayMode === 'dark'
                    ? DarkMode
                    : LightMode
                }
              />
            }
            onClick={changeDisplayMode}
          />
        </Tooltip>
      </div>
    </div>
  )
}

export default Header
