import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../lib/components'

const MyApp = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
          integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
          crossOrigin='anonymous'
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
export default MyApp
