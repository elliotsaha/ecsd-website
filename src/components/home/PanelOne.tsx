import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { scroller } from "react-scroll"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#333645",
      height: "100vh",
    },
    nameContainer: {
      position: "absolute",
      zIndex: 2,
      lineHeight: "9rem",
      color: "white",
      top: "50%",
      paddingLeft: "2rem",
      transform: "translateY(-35%)",
    },
    name: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 800,
      fontSize: "9rem",
      marginBottom: "1.5rem",
    },
    bar: {
      background:
        "linear-gradient(90deg, rgba(101,168,237,1) 0%, rgba(122,141,255,1) 100%)",
      borderRadius: "0.3rem",
      height: "1rem",
      width: "8rem",
      marginLeft: "0.5rem",
    },
    imageContainer: {
      height: "100%",
      display: "flex",
      alignItems: "flex-end",
    },
    image: {
      display: "block",
      marginBottom: 0,
      marginLeft: "20rem",
      opacity: "62.5%",
      width: "43%",
    },
    socials: {
      marginTop: "6rem",
      marginLeft: "0.5rem",
    },
    icon: {
      marginRight: "1.5rem",
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
    messageText: {
      position: "absolute",
      right: 0,
      marginRight: "3rem",
      top: "50%",
      transform: "translateY(-40%)",
    },
    runningText: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 800,
      fontSize: "3rem",
      lineHeight: "3.3rem",
      color: "white",
    },
    runningSub: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 300,
      fontSize: "1.8rem",
      lineHeight: "3rem",
      color: "white",
      paddingTop: "0.9rem",
      paddingBottom: "1.5rem",
    },
    runningButton: {
      background:
        "linear-gradient(90deg, rgba(101,168,237,1) 0%, rgba(122,141,255,1) 100%)",
      padding: "1rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 800,
      textTransform: "none",
      color: "white",
    },
  })
)

export default function PanelOne() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.nameContainer}>
        <div className={classes.name}>
          Rajah <br />
          Maggay.
        </div>
        <div className={classes.bar} />
        <div className={classes.socials}>
          <a
            href="https://www.linkedin.com/in/rajahmaggay/"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.icon}
          >
            <img src="img/linkedIn.svg" alt="Linked In" />
          </a>
          <a
            href="https://twitter.com/RajahMaggay"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.icon}
          >
            <img src="img/twitter.svg" alt="Twitter" />
          </a>
          <a
            href="https://www.instagram.com/rajahmaggay/"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.icon}
          >
            <img src="img/instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <img
          src="img/RajahMaggayGrey.svg"
          alt="Rajah Maggay Grey Scaled"
          className={classes.image}
        />
        <div className={classes.messageText}>
          <div className={classes.runningText}>
            I’m Running For <br />
            Edmonton City <br />
            Council.
          </div>
          <div className={classes.runningSub}>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit. <br />
            Aenean et erat nunc.{" "}
          </div>
          <Button className={classes.runningButton}>Send Message</Button>
        </div>
      </div>
    </div>
  )
}
