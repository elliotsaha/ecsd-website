import React, { useEffect, useRef } from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import RajahMaggayColoured from "../../img/RajahMaggayColoured.png"
import Button from "@material-ui/core/Button"
import { useIntersection } from "react-use"
import { gsap } from "gsap"
import { Link } from "gatsby"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      backgroundColor: "#242734",
      [theme.breakpoints.down(981)]: {
        backgroundColor: "#333645",
      },
    },
    root: {
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "space-around",
      paddingTop: "4rem",
      overflow: "auto",
      position: "relative",
      paddingBottom: "2.5rem",
      [theme.breakpoints.down(550)]: {
        display: "block",
        paddingTop: "2rem",
      },
    },
    text: {
      marginLeft: "3rem",
      color: "white",
      [theme.breakpoints.down(1059)]: {
        textAlign: "center",
        marginRight: "3rem",
      },
    },
    title: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      fontSize: "4rem",
      [theme.breakpoints.down(420)]: {
        fontSize: "3.2rem",
      },
      [theme.breakpoints.down(340)]: {
        fontSize: "2.8rem",
      },
    },
    para: {
      marginTop: "1rem",
      marginRight: "7rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "normal",
      fontSize: "1.5rem",
      [theme.breakpoints.down(1144)]: {
        fontSize: "1.2rem",
        marginRight: "0rem",
      },
    },
    bar: {
      background:
        "linear-gradient(90deg, rgba(101,168,237,1) 0%, rgba(122,141,255,1) 100%)",
      borderRadius: "0.3rem",
      height: "1rem",
      width: "8rem",
      [theme.breakpoints.down(1059)]: {
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    imgContainer: {
      marginLeft: "3rem",
      width: "230%",
      marginRight: "3rem",
      display: "flex",
      [theme.breakpoints.down(1500)]: {
        width: "300rem",
      },
      [theme.breakpoints.down(1249)]: {
        marginLeft: "1rem",
      },
      [theme.breakpoints.down(1059)]: {
        display: "none",
      },
    },
    img: {
      width: '100%',
      display: "block",
      marginTop: "auto",
      marginBottom: "auto",
      [theme.breakpoints.down(550)]: {
        margin: 0,
      },
    },
    Button: {
      background:
        "linear-gradient(90deg, rgba(101,168,237,1) 0%, rgba(122,141,255,1) 100%)",
      padding: "0.8rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 700,
      textTransform: "none",
      fontSize: "1rem",
      color: "white",
      paddingRight: "1.5rem",
      paddingLeft: "1.5rem",
    },
    buttonContainer: {
      paddingBottom: "3rem",
      textAlign: "center",
    },
  })
)

export default function PanelFour() {
  const classes = useStyles()

  // Ref for intersection observer
  const sectionRef3 = useRef(null)

  const intersection = useIntersection(sectionRef3, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  })

  useEffect(() => {
    // Fade in animation when scroll in
    const fadeIn = (element: any) => {
      gsap.to(element, 1, {
        opacity: 1,
        y: -0,
        ease: "power3.out",
        stagger: {
          amount: 0,
        },
      })
    }

    // Fade out animation when scroll out
    const fadeOut = (element: any) => {
      gsap.to(element, 1, {
        opacity: 0,
        y: -50,
        ease: "power3.out",
      })
    }
    intersection && intersection.intersectionRatio < 0.1
      ? // Not Reached
        fadeOut(".fadeIn3")
      : fadeIn(".fadeIn3")
  }, [intersection])

  return (
    <div className={classes.body}>
      <div ref={sectionRef3}>
        <div className="fadeIn3">
          <div className={classes.root}>
            <div className={classes.imgContainer}>
              <img src={RajahMaggayColoured} className={classes.img} />
            </div>
            <div className={classes.text}>
              <div className={classes.title}>About Me</div>
              <div className={classes.bar} />
              <div className={classes.para}>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean et erat nunc. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Aenean et erat nunc. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Aenean et erat nunc. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
                  erat nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean et erat nunc. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Aenean et erat nunc. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Aenean et erat
                  nunc. Lorem ipsum dolor sit amet, consectetur
                </div>
              </div>
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <Link to="/about">
              <Button className={classes.Button}>Read More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
