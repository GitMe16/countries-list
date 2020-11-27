import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

interface Props {
  children: React.ReactNode
  title?: string
  className?: string
}

const Page: React.FunctionComponent<Props> = (props: Props) => {
  const { children, className, title } = props

  return (
    <Fragment>
      <Helmet>
        <title>{`${title} - Countries List` || 'Countries List'}</title>
      </Helmet>
      <div className={className}>
        {children}
      </div>
    </Fragment>
  )
}

export default Page
