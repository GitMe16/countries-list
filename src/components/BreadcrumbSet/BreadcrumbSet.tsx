import { Breadcrumb } from 'antd'
import Icon from '@ant-design/icons'
import { ReactComponent as CaretRight } from 'assets/images/caret-right.svg'
import React from 'react'

export interface BreadItem {
  href?: string
  label: string | React.ReactNode
}

interface Props {
  className?: string
  iconClass?: string
  items: BreadItem[]
}

export const BreadcrumbSet: React.FunctionComponent<Props> = (props: Props) => {
  const { className = '', iconClass = '', items } = props

  return (
    <Breadcrumb
      className={`breadcrumbs ${className}`}
      separator={
        <Icon component={CaretRight} className={`icon ${iconClass}`} />
      }
    >
      {
        items.map((item: BreadItem) => (
          <Breadcrumb.Item href={item?.href || ""}>
            {item.label}
          </Breadcrumb.Item>
        ))
      }
    </Breadcrumb>
  )
}
