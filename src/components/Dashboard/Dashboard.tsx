import { Typography } from 'antd'
import clsx from 'clsx'
import { Header, Page } from 'components'
import React from 'react'
import { useSelector } from 'react-redux'
import { DisplayOptions } from 'store/displayMode/reducers'
import { RootState } from 'store/reducers'

interface Props {
  children: React.ReactNode
  containerClass?: string
  pageTitle?: string
  title?: string
  titleClass?: string
}

const Dashboard: React.FunctionComponent<Props> = (props: Props) => {
  const {
    children, containerClass = '',
    pageTitle, title, titleClass = '',
  } = props
  const { Title } = Typography
  const displayMode = useSelector<RootState, DisplayOptions | null>((state) => state.DisplayMode.themeMode)

  return (
    <Page title={title}>
      <Header />
      <div className={clsx('main', {dark: displayMode === 'dark'})}>
        <div className={clsx('container', containerClass, 'dashboard')}>
          {pageTitle && (
            <Title
              level={2}
              className={clsx('title', titleClass, {dark: displayMode === 'dark'})}
            >
              { pageTitle }
            </Title>
          )}
          {children}
        </div>
      </div>
    </Page>
  )
}

export default Dashboard
