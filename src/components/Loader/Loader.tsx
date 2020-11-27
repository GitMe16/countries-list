import { Spin } from 'antd'
import React from 'react'

interface Props {
  className?: string
  size?: 'large' | 'small'
}

const Loader: React.FunctionComponent<Props> = (props: Props) => {
  const { className, size } = props

  return (
    <div className={className}>
      <Spin size={size} />
    </div>
  )
}

export default Loader
