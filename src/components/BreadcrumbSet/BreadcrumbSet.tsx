import { Breadcrumb } from 'antd'
import Icon from '@ant-design/icons'
import { ReactComponent as CaretRight } from 'assets/images/caret-right.svg'
import clsx from 'clsx'
import React from 'react'
import { useSelector } from 'react-redux'
import { DisplayOptions } from 'store/displayMode/reducers'
import { RootState } from 'store/reducers'

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
  const displayMode = useSelector<RootState, DisplayOptions | null>((state) => state.DisplayMode.themeMode)

  return (
    <Breadcrumb
      className={clsx('breadcrumbs', className, {dark: displayMode === 'dark'})}
      separator={
        <Icon component={CaretRight} className={clsx('icon', iconClass, {dark: displayMode === 'dark'})} />
      }
    >
      {
        items.map((item: BreadItem, index: number) => (
          <Breadcrumb.Item href={item?.href || ""} key={index}>
            {item.label}
          </Breadcrumb.Item>
        ))
      }
    </Breadcrumb>
  )
}
