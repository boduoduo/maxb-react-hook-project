import App from 'next/app'
import 'antd/dist/antd.css'
import '../styles/globals.css'
import '../static/style/pages/common.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App
