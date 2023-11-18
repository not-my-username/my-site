import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  return (
      <Component {...pageProps}/>
    )
    
}