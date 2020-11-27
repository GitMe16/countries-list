import { Button, Typography } from 'antd'
import Error404Png from 'assets/graphic/Error404.png'
import { URLS } from 'constants/routes'
import { Page } from 'components'
import React from 'react'
import { useHistory } from 'react-router'

const Error404: React.FunctionComponent = () => {
  const { Title, Paragraph } = Typography
  const history = useHistory()

  const goToHome = () => {
    history.push(URLS.Home)
  }

  return (
    <Page title="Error 404" className="fullWidth">
      <div className="error">
        <img src={Error404Png} alt="Error 404" className="img" />
        <Typography className="error-block">
          <Title className="title">PAGE NOT FOUND</Title>
          <Paragraph type="secondary" className="description">
            Sorry, we do not have the page you are looking for. Please try another url or go to our homepage.
          </Paragraph>
        </Typography>
        <div className="flex justify-center">
          <Button
            className="btn big"
            type="primary"
            shape="round"
            size="large"
            onClick={goToHome}
          >
            Go to Home
          </Button>
        </div>
      </div>
    </Page>
  )
}

export default Error404
