import '../styles/globals.css'
import { Baloo_2, Montserrat, Coda } from '@next/font/google'

const baloo = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const coda = Coda({
  subsets: ['latin'],
  variable: '--font-coda',
  weight: ['800', '400'],
  display: 'block',
})


export default function App({ Component, pageProps }) {
  return (
    <main className={`${baloo.variable} font-baloo`}  >
      <div className={`${montserrat.variable} font-montserrat`}>
        <div className={`${coda.variable} font-coda`}>
          <Component {...pageProps} />
        </div>
      </div>
    </main>
  )
}
