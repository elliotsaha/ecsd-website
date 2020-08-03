import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"
import Img from "gatsby-image"
import { Tween } from "react-gsap"
// Images
import Instagram from "../../img/instagram.svg"
import Twitter from "../../img/twitter.svg"
import LinkedIn from "../../img/linkedIn.svg"
import RajahMaggay from "../../img/RajahMaggayGrey.png"
import { Link } from "gatsby"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Panel: {
      position: "relative",
      backgroundColor: "#333645",
      height: "100vh",
      [theme.breakpoints.down(981)]: {
        height: "38.5rem",
      },
      [theme.breakpoints.down(378)]: {
        height: "32.5rem",
      },
      [theme.breakpoints.down(360)]: {
        height: "30.5rem",
      },
    },
    nameContainer: {
      position: "absolute",
      zIndex: 2,
      lineHeight: "9rem",
      color: "white",
      top: "50%",
      paddingLeft: "2rem",
      transform: "translateY(-30%)",
      [theme.breakpoints.down(1320)]: {
        lineHeight: "6rem",
      },
      [theme.breakpoints.down(500)]: {
        transform: "translateY(30%)",
        lineHeight: "4rem",
        paddingLeft: "1rem",
      },
    },
    name: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 800,
      fontSize: "9rem",
      marginBottom: "1.5rem",
      [theme.breakpoints.down(1320)]: {
        fontSize: "6rem",
      },
      [theme.breakpoints.down(981)]: {
        fontSize: "5rem",
      },
      [theme.breakpoints.down(500)]: {
        fontSize: "4rem",
      },
    },
    bar: {
      background:
        "linear-gradient(90deg, rgba(101,168,237,1) 0%, rgba(122,141,255,1) 100%)",
      borderRadius: "0.3rem",
      height: "1rem",
      width: "8rem",
      marginLeft: "0.5rem",
      [theme.breakpoints.down(500)]: {
        marginLeft: 0,
        width: "5rem",
      },
    },
    imageContainer: {
      height: "100%",
      display: "flex",
      alignItems: "flex-end",
    },
    image: {
      visibility: 'hidden',
      display: "block",
      position: 'absolute',
      right: '500px',
      marginBottom: 0,
      marginLeft: "20rem",
      opacity: "62.5%",
      width: "80vh",
      [theme.breakpoints.down(1320)]: {
        marginLeft: "10rem",
      },
      [theme.breakpoints.down(981)]: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "30rem",
      },
    },
    socials: {
      marginTop: "6rem",
      marginLeft: "0.5rem",
      [theme.breakpoints.down(981)]: {
        display: "none",
      },
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
      [theme.breakpoints.down(981)]: {
        display: "none",
      },
      position: "absolute",
      right: "5rem",
      [theme.breakpoints.down(1500)]: {
        right: "1rem",
      },
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
      [theme.breakpoints.down(1320)]: {
        fontSize: "2.2rem",
        lineHeight: "2.6rem",
      },
      [theme.breakpoints.down(981)]: {
        fontSize: "2.5rem",
      },
    },
    runningSub: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 300,
      fontSize: "1.8rem",
      lineHeight: "3rem",
      color: "white",
      paddingTop: "0.9rem",
      paddingBottom: "1.5rem",
      [theme.breakpoints.down(1320)]: {
        fontSize: "1.35rem",
        lineHeight: "2rem",
      },
      [theme.breakpoints.down(981)]: {
        lineHeight: "2.5rem",
        fontSize: "2rem",
      },
    },
    runningButton: {
      background:
        "linear-gradient(90deg, rgba(101,168,237,1) 0%, rgba(122,141,255,1) 100%)",
      padding: "1rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 700,
      textTransform: "none",
      fontSize: "1rem",
      color: "white",
    },
    mobileSecoundPanel: {
      display: "none",
      [theme.breakpoints.down(981)]: {
        display: "block",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        backgroundColor: "#242734",
        minHeight: "25vh",
        padding: "2rem",
      },
    },
  })
)

export default function PanelOne() {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.Panel}>
        <div className={classes.nameContainer}>
          <div className={classes.name}>
            <Typist
              cursor={{
                show: true,
                blink: true,
                element: "|",
                hideWhenDone: true,
                hideWhenDoneDelay: 5,
              }}
            >
              Rajah <br />
              Maggay.
            </Typist>
          </div>
          <div className={classes.bar} />

          <div className={classes.socials}>
            <Tween
              from={{ x: "500px", opacity: 0 }}
              duration={1.5}
              stagger={0.15}
              ease="back.out(0.1)"
            >
              <div style={{display: 'inline-block'}}>
                <a
                  href="https://www.linkedin.com/in/rajahmaggay/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={classes.icon}
                >
                  <img src={LinkedIn} alt="Linked In" />
                </a>
              </div>
              <div style={{display: 'inline-block'}}>
                <a
                  href="https://twitter.com/RajahMaggay"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={classes.icon}
                >
                  <img src={Twitter} alt="Twitter" />
                </a>
              </div>
              <div style={{display: 'inline-block'}}>
                <a
                  href="https://www.instagram.com/rajahmaggay/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={classes.icon}
                >
                  <img src={Instagram} alt="Instagram" />
                </a>
              </div>
            </Tween>
          </div>
        </div>

        <div className={classes.imageContainer}>
          <Tween
            to={{opacity: 1, x: '500px', position: 'relative', visibility: 'visible'}}
            duration={2.5}
            ease="back.out(0.1)"
          >
            <img
              src={RajahMaggay}
              alt="Rajah Maggay"
              className={classes.image}
            />
          </Tween>

          <Tween
            from={{ x: "500px", opacity: 0 }}
            duration={1.5}
            ease="back.out(0.1)"
          >
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
              <Link to="/contact">
                <Button className={classes.runningButton}>Send Message</Button>
              </Link>
            </div>
          </Tween>
        </div>
      </div>
      <div className={classes.mobileSecoundPanel}>
        <div className={classes.runningText}>
          I’m Running For Edmonton City Council.
        </div>
        <div className={classes.runningSub}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
          erat nunc.{" "}
        </div>
        <Link to="/contact">
          <Button className={classes.runningButton}>Send Message</Button>
        </Link>
      </div>
    </div>
  )
}
