import { HomeOutlined } from '@ant-design/icons'
import { BreadcrumbSet, BreadItem, Dashboard } from 'components'
import { URLS } from 'constants/routes'
import React from 'react'
import { useParams } from 'react-router'
import { capitalise } from 'utils'

const Country: React.FunctionComponent = () => {
  const params: {[index: string]: any} = useParams() || {}
  const country = capitalise(params?.country) || ''

  const breadSlices: BreadItem[] = [
    {
      label: <HomeOutlined />,
      href: URLS.Home,
    },
    {
      label: <span>{country}</span>,
    }
  ]

  return (
    <Dashboard pageTitle={country} title={country}>
      <BreadcrumbSet items={breadSlices} />
    </Dashboard>
  )
}

export default Country
