import React, { useEffect } from 'react'
import { listCountries } from 'utils'

const CountriesList: React.FunctionComponent = () => {
  useEffect(() => {
    try {
      const results = listCountries() //eslint-disable-line
    } catch (err) {
      console.error(err)
    }
  })

  return (
    <div>
      This is a countries list
    </div>
  )
}

export default CountriesList
