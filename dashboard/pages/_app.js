import "../styles/globals.css"
import { AuthProvider } from "../context/AuthUserContext"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp