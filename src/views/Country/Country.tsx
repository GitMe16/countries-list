import React from 'react'
import { useParams } from 'react-router'

const Country: React.FunctionComponent = () => {
  const params = useParams()
  console.log(params)

  return (
    <div>
      This is country page
    </div>
  )
}

export default Country
