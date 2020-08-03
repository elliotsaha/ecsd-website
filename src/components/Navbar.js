import React, { useEffect, useState } from "react"
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { Link } from "gatsby"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import CloseIcon from "@material-ui/icons/Close"
import Button from "@material-ui/core/Button"
// Drawer Icons
import BookRoundedIcon from "@material-ui/icons/BookRounded"
import InfoRoundedIcon from "@material-ui/icons/InfoRounded"
import GavelRoundedIcon from "@material-ui/icons/GavelRounded"
import HomeRoundedIcon from "@material-ui/icons/HomeRounded"
import EmailRoundedIcon from "@material-ui/icons/EmailRounded"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { Divider } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

// Images
import Instagram from "../img/instagram.svg"
import Twitter from "../img/twitter.svg"
import LinkedIn from "../img/linkedIn.svg"

//Styles
const drawerWidth = 240
const useStyles = makeStyles(theme =>
  createStyles({
    appBar: {
      width: "100%",
      backgroundColor: "transparent",
      textTransform: "none",
      transition: "all 0.15s ease",
      position: "fixed",
      [theme.breakpoints.down(981)]: {
        display: "none",
      },
    },
    appBarScroll: {
      width: "100%",
      transition: "all 0.15s ease",
      background: "#1A1D29",
      paddingBottom: "1rem",
      textTransform: "none",
      position: "fixed",
      [theme.breakpoints.down(981)]: {
        display: "none",
      },
    },
    linkContainer: {
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "1rem",
    },
    itemContainer: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("lg")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    closeMenuButton: {
      marginRight: "auto",
      marginLeft: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      background: "#7A8DFF",
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
    inactiveContact: {
      paddingTop: "0.7rem",
      position: "absolute",
      right: "0",
      textDecoration: "none",
      paddingRight: "2.5rem",
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
      background: "linear-gradient(to right, #65ACED, #7A8DFF) no-repeat",
      opacity: "100%",
      paddingBottom: "0.5rem",
      backgroundSize: "30% 3px",
      backgroundPosition: "bottom",
    },
    appBarMobile: {
      display: "none",
      [theme.breakpoints.down(981)]: {
        position: "fixed",
        width: "100%",
        display: "block",
      },
      background: "transparent",
      transition: "all 0.15s ease",
    },
    appBarMobileScroll: {
      display: "none",
      [theme.breakpoints.down(981)]: {
        position: "fixed",
        width: "100%",
        transition: "all 0.15s ease",
        display: "block",
        background: "#1A1D29",
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("lg")]: {
        display: "none",
      },
      color: "white",
      marginLeft: "0.25rem",
      marginTop: "0.3rem",
      marginBottom: "0.3rem",
    },
    sideBarActive: {},
    sideBarInactive: {
      color: "white",
      opacity: "80%",
    },
    sideBarText: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 700,
    },
    sideBarName: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 700,
      color: "white",
      paddingLeft: "1rem",
      fontSize: "2.5rem",
      lineHeight: "2.7rem",
      marginBottom: "0.6rem",
    },
    socials: {
      position: "absolute",
      top: 0,
      right: 0,
      paddingTop: "0.25rem",
      marginRight: "0.5rem",
      marginTop: "0.3rem",
    },
    contactButton: {
      background: "linear-gradient(to right, #65ACED, #7A8DFF) no-repeat",
      textTransform: 'none',
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: 700,
      color: 'white',
      border: 0,
      boxShadow: "none",
      fontFamily: "Gilroy, sans-serif",
      paddingRight: "1rem",
      paddingLeft: '1rem',
    },
    socialIcons: {
      paddingLeft: "2rem",
      textDecoration: "none",
      border: 0,
      boxShadow: "none",
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
    socialIconsInner: {
      width: "2.5rem",
    },
  })
)

export default function Navbar() {
  const classes = useStyles()
  const [scrollClass, setScrollClass] = useState(classes.appBar)
  const [scrollMobileClass, setScrollMobileClass] = useState(
    classes.appBarMobile
  )
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setScrollClass(classes.appBarScroll)
        setScrollMobileClass(classes.appBarMobileScroll)
      } else {
        setScrollClass(classes.appBar)
        setScrollMobileClass(classes.appBarMobile)
      }
    })
  })

  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
  const itemsList = [
    {
      text: "Home",
      icon: <HomeRoundedIcon />,
      link: "/",
      onClick: () => {
        handleDrawerToggle()
      },
    },
    {
      text: "About",
      icon: <InfoRoundedIcon />,
      link: "/about",
      onClick: () => {
        handleDrawerToggle()
      },
    },
    {
      text: "Blog",
      icon: <BookRoundedIcon />,
      link: "/blog",
      onClick: () => {
        handleDrawerToggle()
      },
    },
    {
      text: "Initiatives",
      link: "/initiatives",
      icon: <GavelRoundedIcon />,
      onClick: () => {
        handleDrawerToggle()
      },
    },
  ]

  const Contact = [
    {
      text: "Contact",
      link: "/contact",
      icon: <EmailRoundedIcon />,
      onClick: () => {
        handleDrawerToggle()
      },
    },
  ]
  //Drawer
  const drawer = (
    <div>
      <List>
        <div className={classes.sideBarName}>
          Rajah <br />
          Maggay.
        </div>
        <Divider />
        {itemsList.map((item, index) => {
          const { text, icon, link, onClick } = item
          return (
            <Link
              to={link}
              fade
              hex="#7A8DFF"
              duration={0.5}
              activeClassName={classes.sideBarActive}
              className={classes.sideBarInactive}
            >
              <ListItem
                button
                key={text}
                onClick={onClick}
                className={classes.sideBarText}
              >
                {icon && (
                  <ListItemIcon className={classes.sideBarInactive}>
                    {icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  disableTypography
                  primary={text}
                  className={classes.sideBarText}
                />
              </ListItem>
            </Link>
          )
        })}
        <Divider />
        {Contact.map((item, index) => {
          const { text, icon, link, onClick } = item
          return (
            <Link
              to={link}
              fade
              hex="#7A8DFF"
              duration={0.5}
              activeClassName={classes.sideBarActive}
              className={classes.sideBarInactive}
            >
              <ListItem
                button
                key={text}
                onClick={onClick}
                className={classes.sideBarText}
              >
                {icon && (
                  <ListItemIcon className={classes.sideBarInactive}>
                    {icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  disableTypography
                  primary={text}
                  className={classes.sideBarText}
                />
              </ListItem>
            </Link>
          )
        })}
      </List>
    </div>
  )

  return (
    <React.Fragment>
      <AppBar position="fixed" className={scrollClass} elevation={0}>
        <div className={classes.itemContainer}>
          <div className={classes.nameContainer}>Rajah Maggay.</div>
          <div className={classes.linkContainer}>
            <Link
              to="/"
              className={classes.inactive}
              activeClassName={classes.active}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={classes.inactive}
              activeClassName={classes.active}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={classes.inactive}
              activeClassName={classes.active}
            >
              Blog
            </Link>
            <Link
              to="/initiatives"
              className={classes.inactive}
              activeClassName={classes.active}
            >
              Initiatives
            </Link>
          </div>
          <Link to="/contact" className={classes.inactiveContact}>
            <Button className={classes.contactButton}>Contact</Button>
          </Link>
        </div>
      </AppBar>

      <AppBar position="fixed" className={scrollMobileClass} elevation={0}>
        <IconButton
          aria-label="Open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.socials}>
          <a
            href="https://www.linkedin.com/in/rajahmaggay/"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.socialIcons}
          >
            <img
              src={LinkedIn}
              className={classes.socialIconsInner}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://twitter.com/RajahMaggay"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.socialIcons}
          >
            <img
              src={Twitter}
              className={classes.socialIconsInner}
              alt="Twitter"
            />
          </a>
          <a
            href="https://www.instagram.com/rajahmaggay/"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.socialIcons}
          >
            <img
              src={Instagram}
              className={classes.socialIconsInner}
              alt="Instagram"
            />
          </a>
        </div>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden lgUp implementation="js">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon className={classes.sideBarInactive} />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </React.Fragment>
  )
}
