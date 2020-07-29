import React, { useEffect, useState } from "react"
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
  withStyles,
} from "@material-ui/core/styles"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { Link } from "gatsby"
import { mergeClasses } from "@material-ui/styles"
//Styles
const drawerWidth = 240
const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      backgroundColor: "transparent",
      textTransform: "none",
    },
    linkContainer: {
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "1rem",
    },
    itemContainer: {
      display: "flex",
    },
    inactive: {
      opacity: "50%",
      textDecoration: "none",
      paddingRight: "2.5rem",
      paddingLeft: "2.5rem",
      fontSize: "1.1rem",
      border: 0,
      boxShadow: "none",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 800,
      color: "white",
      "&:visited": {
        border: 0,
      },
      "&:hover": {
        border: 0,
      },
      "&:link": {
        border: 0,
      },
      "&:active": {
        border: 0,
      },
    },
    nameContainer: {
      paddingTop: "1rem",
      position: "absolute",
      paddingLeft: "2.3rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 800,
      fontSize: "1.2rem",
    },
    active: {
      opacity: "100%",
      paddingBottom: "0.5rem",
      background: "linear-gradient(to right, #65ACED, #7A8DFF) no-repeat",
      backgroundSize: "30% 3px",
      backgroundPosition: "bottom",
    },
  })
)

export default function Navbar() {
  const classes = useStyles()
  return (
    <AppBar position="fixed" className={classes.appBar} elevation={0}>
      <div className={classes.itemContainer}>
        <div className={classes.nameContainer}>Rajah Maggay.</div>
        <div className={classes.linkContainer}>
          <AniLink
            to="/"
            paintDrip
            hex="#65ACED"
            duration={0.5}
            className={classes.inactive}
            activeClassName={classes.active}
          >
            Home
          </AniLink>
          <AniLink
            to="/about"
            paintDrip
            hex="#6CA2F3"
            duration={0.5}
            className={classes.inactive}
            activeClassName={classes.active}
          >
            About
          </AniLink>
          <AniLink
            to="/blog"
            paintDrip
            hex="#7397F9"
            duration={0.5}
            className={classes.inactive}
            activeClassName={classes.active}
          >
            Blog
          </AniLink>
          <AniLink
            to="/initiatives"
            hex="#7A8DFF"
            duration={0.5}
            className={classes.inactive}
            activeClassName={classes.active}
          >
            Initiatives
          </AniLink>
        </div>
      </div>
    </AppBar>
  )
}
