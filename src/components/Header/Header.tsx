import { Button, Tooltip, Typography } from 'antd'
import Icon from '@ant-design/icons'
import DarkMode from 'assets/images/dark-mode.svg'
import { ReactComponent as LightMode } from 'assets/images/light-mode.svg'
import { ReactComponent as WorldIcon } from 'assets/images/world.svg'
import React from 'react'

const Header: React.FunctionComponent = () => {
  const { Title } = Typography

  return (
    <div className="header flex align-center justify-between">
      <div className="flex align-center">
        <WorldIcon className="icon" />
        <Title className="title" level={3}>ALL-ROUNDER</Title>
      </div>
      <div>
        <Tooltip title="Change display mode">
          <Button
            type="text"
            className="flex align-center justify-center icon-btn"
            shape="circle"
            icon={
              <Icon className="mode-icon ant-typography-secondary" component={LightMode} />
            }
          />
        </Tooltip>
      </div>
    </div>
  )
}

export default Header
