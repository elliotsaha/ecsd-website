import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"
import { Tween } from "react-gsap"
// Images
import Instagram from "../../img/instagram.svg"
import Twitter from "../../img/twitter.svg"
import LinkedIn from "../../img/linkedIn.svg"
import RajahMaggay from "../../img/RajahMaggayRed.png"
import { Link } from "gatsby"
import backgroundImage from "../../img/homepageBackground.jpg"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Panel: {
      zIndex: 1,
      position: "relative",
      background: "linear-gradient(50deg, #2C2E39, #16181E)",
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
        "linear-gradient(90deg, rgba(255, 155, 33, 1) 0%, rgba(232,118,19,1) 100%)",
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
      visibility: "hidden",
      display: "block",
      position: "absolute",
      bottom: "-100px",
      marginBottom: 0,
      marginLeft: "22rem",
      opacity: 0,
      width: "80vh",
      [theme.breakpoints.down(1320)]: {
        marginLeft: "16.5rem",
      },
      [theme.breakpoints.down(981)]: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "30rem",
      },
    },
    socialInner: {
      display: "inline-block",
      marginLeft: "6rem",
      opacity: 0,
    },
    socials: {
      marginTop: "4rem",
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
      top: "80%",
      opacity: 0,
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
      "linear-gradient(90deg, rgba(255, 155, 33, 1) 0%, rgba(232,118,19,1) 100%)",
      padding: "1rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 700,
      textTransform: "none",
      fontSize: "1rem",
      color: "white",
    },

// BACKGROUND IMAGE
//    container: {
//      overflow: "auto",
//    },
//    backgroundImage: {
//      position: "absolute",
//      width: "100%",
//      left: "50%",
//      top: "50%",
//      height: "100%",
//      objectFit: "cover",
//      transform: "translate(-50%, -50%)",
//      zIndex: -1,
//      filter: "brightness(60%)",
//    },
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
{/* 

// BACKGROUND IMAGE

      <div className={classes.container}>
        <img src={backgroundImage} className={classes.backgroundImage} />
      </div>
      
*/}     
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
              to={{ opacity: 1, marginLeft: 0 }}
              duration={1}
              stagger={0.5}
              ease="back.out(0.3)"
            >
              <div className={classes.socialInner}>
                <a
                  href="https://www.linkedin.com/in/rajahmaggay/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={classes.icon}
                >
                  <img src={LinkedIn} alt="Linked In" />
                </a>
              </div>
              <div className={classes.socialInner}>
                <a
                  href="https://twitter.com/RajahMaggay"
                  rel="noopener noreferrer"
                  target="_blank"
                  className={classes.icon}
                >
                  <img src={Twitter} alt="Twitter" />
                </a>
              </div>
              <div className={classes.socialInner}>
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
            to={{
              opacity: 1,
              y: "-100px",
              position: "relative",
              visibility: "visible",
              filter: 'brightness(100%)',
            }}
            duration={2}
            ease="back.out(0.1)"
          >
            <img
              src={RajahMaggay}
              alt="Rajah Maggay"
              className={classes.image}
            />
          </Tween>
          <Tween
            to={{
              opacity: 1,
              top: "50%",
            }}
            duration={1.8}
            ease="back.out(0.3)"
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
