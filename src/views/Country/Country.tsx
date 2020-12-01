import Icon, { HomeOutlined } from '@ant-design/icons'
import { ReactComponent as Flag } from 'assets/images/flag.svg'
import clsx from 'clsx'
import { BreadcrumbSet, BreadItem, Dashboard } from 'components'
import { URLS } from 'constants/routes'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { DisplayOptions } from 'store/displayMode/reducers'
import { RootState } from 'store/reducers'
import { capitalise } from 'utils'

const Country: React.FunctionComponent = () => {
  const params: {[index: string]: any} = useParams() || {}
  const country = capitalise(params?.country) || ''
  const displayMode = useSelector<RootState, DisplayOptions | null>((state) => state.DisplayMode.themeMode)

  const breadSlices: BreadItem[] = [
    {
      label: <HomeOutlined className={clsx('icon', {dark: displayMode === 'dark'})} />,
      href: URLS.Home,
    },
    {
      label: (
        <span className={clsx({dark: displayMode === 'dark'})}>
          <Icon className={clsx('flag-icon', {dark: displayMode === 'dark'})} component={Flag} />
          <span className="label">{country}</span>
        </span>
      ),
    }
  ]

  return (
    <Dashboard
      containerClass="country-detail"
      pageTitle={country}
      title={country}
    >
      <BreadcrumbSet items={breadSlices} />
    </Dashboard>
  )
}

export default Country
