import React from "react"
import Navbar from "./Navbar"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
        ></link>
      </Helmet>
      <Navbar />
      <main>{children}</main>
    </React.Fragment>
  )
}
