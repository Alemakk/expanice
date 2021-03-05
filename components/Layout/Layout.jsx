import React from 'react'
import NextHead from "next/head";
import GoogleFonts from "next-google-fonts";

import { Molecules } from '../'
const { Header, Footer } = Molecules

export default function ({ title = 'Default page title', children }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800&display=swap" />
      <NextHead>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <title>{title}</title>
      </NextHead>

      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}