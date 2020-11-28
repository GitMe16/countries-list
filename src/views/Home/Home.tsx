import { BreadItem, BreadcrumbSet, Dashboard } from 'components'
import React from 'react'

const Home: React.FunctionComponent = () => {

  const breadSlices: BreadItem[] = [
    {
      label: 'Home',
    }
  ]

  return (
    <Dashboard
      pageTitle="Discover new countries"
      title="Home"
    >
      <BreadcrumbSet className="breadcrumbs" items={breadSlices} />
    </Dashboard>
  )
}

export default Home
