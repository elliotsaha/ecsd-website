import React, { useState } from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'grid',
      maxWidth: '45rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      gridGap: '2rem',
      paddingTop: '3rem',
    },
  }))
const Layout = ({ location, title, children }) => {
  const classes = useStyles()
  let header
  return (
    <div>
      <main className={classes.root}>{children}</main>
    </div>
  )
}

export default Layout
