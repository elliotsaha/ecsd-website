import React, { useState } from "react"
import PanelOne from "./PanelOne"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',

    },
  }))
const Layout = ({ location, title, children }) => {
  const classes = useStyles()
  let header
  return (
    <div>
      <PanelOne />
      <h1>{title}</h1>
      <header>{header}</header>
      <main className={classes.root}>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
