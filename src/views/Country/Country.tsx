import React from 'react'
import { useParams } from 'react-router'
import { Page } from 'components'

const Country: React.FunctionComponent = () => {
  const params = useParams()
  console.log(params)

  return (
    <Page title="Country Details">
      This is country page
    </Page>
  )
}

export default Country
