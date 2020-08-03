import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <Helmet>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/gsap.min.js" />
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <main>{children}</main> 
      <Footer />
    </React.Fragment>
  )
}
