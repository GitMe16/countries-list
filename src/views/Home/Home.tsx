import { HomeOutlined } from '@ant-design/icons'
import clsx from 'clsx'
import { BreadcrumbSet, BreadItem, Dashboard } from 'components'
import React from 'react'
import { useSelector } from 'react-redux'
import { DisplayOptions } from 'store/displayMode/reducers'
import { RootState } from 'store/reducers'
import { CountriesList } from './components'

const Home: React.FunctionComponent = () => {
  const displayMode = useSelector<RootState, DisplayOptions | null>((state) => state.DisplayMode.themeMode)

  const breadSlices: BreadItem[] = [
    {
      label: <HomeOutlined className={clsx('icon', {dark: displayMode === 'dark'})} />,
    }
  ]

  return (
    <Dashboard
      containerClass="home"
      pageTitle="Discover new countries"
      title="Home"
    >
      <BreadcrumbSet className="breadcrumbs page" items={breadSlices} />
      <CountriesList />
    </Dashboard>
  )
}

export default Home
