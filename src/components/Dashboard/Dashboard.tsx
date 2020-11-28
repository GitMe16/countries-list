import { Typography } from 'antd'
import { Header, Page } from 'components'
import React from 'react'

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

  return (
    <Page title={title}>
      <Header />
      <div className="main">
        <div className={`container ${containerClass} dashboard`}>
          {pageTitle && (
            <Title
              level={2}
              className={`title ${titleClass}`}
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
