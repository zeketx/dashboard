import Layout from '../components/Layout'
import styles from '../styles/Sidebar.module.css'
import '../styles/globals.css'

import { AuthUserProvider } from '../context/AuthUserContext'

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp