import React from 'react'
import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-fade/effect-fade.scss';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { GridThemeProvider } from 'styled-bootstrap-grid'
import { theme, gridTheme } from '../constants'

const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Mulish', sans-serif;
  }
  main {
    position: relative;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <GridThemeProvider gridTheme={gridTheme}>
          <Component {...pageProps} />
        </GridThemeProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
