import { Spin } from 'antd'
import React from 'react'

interface Props {
  children?: React.ReactNode
  className?: string
  size?: 'small' | 'large' | 'default' | undefined
  tip?: string
  bottomClass?: string
}

const Loader: React.FunctionComponent<Props> = (props: Props) => {
  const { children, className, size, tip, bottomClass = '' } = props

  return (
    <div className={className}>
      <div>
        {
          children
            ? (
              <div className="generic-spinner">
                <Spin size={size} tip={tip} />
              </div>
            )
            : <Spin size={size} tip={tip} />
        }
        {children ? children : null}
      </div>
    </div>
  )
}

export default Loader
