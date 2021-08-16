import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import Layout from '../components/Layout'
import '../styles/style.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const { asPath, route, pathname } = router
  console.log(asPath)

  if (asPath == "/login")
    return (
      <Component {...pageProps} />
    )
  else
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
}
export default MyApp
