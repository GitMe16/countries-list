import { Button, Typography } from 'antd'
import Error404Png from 'assets/images/graphic/Error404.png'
import clsx from 'clsx'
import { URLS } from 'constants/routes'
import { Page } from 'components'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { DisplayOptions } from 'store/displayMode/reducers'
import { RootState } from 'store/reducers'

const Error404: React.FunctionComponent = () => {
  const { Title, Paragraph } = Typography
  const history = useHistory()
  const displayMode = useSelector<RootState, DisplayOptions | null>((state) => state.DisplayMode.themeMode)

  const goToHome = () => {
    history.push(URLS.Home)
  }

  return (
    <Page
      title="Error 404"
      className={clsx(
        'fullWidth',
        {dark: displayMode === 'dark'}
      )}
    >
      <div className="error">
        <img src={Error404Png} alt="Error 404" className="img" />
        <Typography className="error-block">
          <Title className={clsx('title', {dark: displayMode === 'dark'})}>PAGE NOT FOUND</Title>
          <Paragraph className={clsx('description', {dark: displayMode === 'dark'})}>
            Sorry, we do not have the page you are looking for. Please try another url or go to our homepage.
          </Paragraph>
        </Typography>
        <div className="flex justify-center">
          <Button
            className={clsx(
              'btn', 'big',
              'main-color',
              {dark: displayMode === 'dark'},
            )}
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
