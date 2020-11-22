import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

interface Props {
  children: React.ReactNode
  title?: string
}

const Page: React.FunctionComponent<Props> = (props: Props) => {
  const { children, title } = props

  return (
    <Fragment>
      <Helmet>
        <title>{`${title} - Countries List` || 'Countries List'}</title>
      </Helmet>
      {children}
    </Fragment>
  )
}

export default Page
