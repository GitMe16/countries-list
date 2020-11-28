import React from 'react'
import { useParams } from 'react-router'
import { BreadItem, BreadcrumbSet, Dashboard } from 'components'
import { URLS } from 'constants/routes'

const Country: React.FunctionComponent = () => {
  const params = useParams()
  console.log(params)

  const breadSlices: BreadItem[] = [
    {
      label: 'Home',
      href: URLS.Home,
    },
    {
      label: 'Country Name',
    }
  ]

  return (
    <Dashboard pageTitle="Country Name" title="Country Details">
      <BreadcrumbSet items={breadSlices} />
    </Dashboard>
  )
}

export default Country
