import './globals.css'
import {Merriweather} from '@next/font/google'

const merriweather = Merriweather({
  weight:["400","700"],
  subsets:["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${merriweather.className} mx-32 my-12` }>{children}</body>
    </html>
  )
}
