import { HomeOutlined } from '@ant-design/icons'
import { BreadItem, BreadcrumbSet, Dashboard } from 'components'
import React from 'react'
import { CountriesList } from './components'

const Home: React.FunctionComponent = () => {

  const breadSlices: BreadItem[] = [
    {
      label: <HomeOutlined />,
    }
  ]

  return (
    <Dashboard
      pageTitle="Discover new countries"
      title="Home"
    >
      <BreadcrumbSet className="breadcrumbs page" items={breadSlices} />
      <CountriesList />
    </Dashboard>
  )
}

export default Home
