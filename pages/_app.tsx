import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  This is from _app.tsx
  <Component {...pageProps} /></>
}

export default MyApp
