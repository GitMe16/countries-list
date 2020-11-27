import { Typography } from 'antd'
import { ReactComponent as WorldIcon } from 'assets/images/world.svg'
import React from 'react'

const Header: React.FunctionComponent = () => {
  const { Title } = Typography

  return (
    <div className="header flex align-center">
      <WorldIcon className="icon" />
      <Title className="title" level={3}>ALL-ROUNDER</Title>
    </div>
  )
}

export default Header
