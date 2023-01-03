import '../styles/globals.css'
import { Baloo_2, Montserrat } from '@next/font/google'

const baloo = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})


export default function App({ Component, pageProps }) {
  return (
    <main className={[`${baloo.variable} font-baloo`, `${montserrat.variable} font-montserrat`]}>
      <Component {...pageProps} />
    </main>
  )
}
