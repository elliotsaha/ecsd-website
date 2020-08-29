import React, { useEffect, useRef } from "react"
import city from "../../img/Accomplishments/city.svg"
import home from "../../img/Accomplishments/home.svg"
import friends from "../../img/Accomplishments/friends.svg"
import council from "../../img/Accomplishments/council.svg"
import { useIntersection } from "react-use"
import { gsap } from "gsap"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "linear-gradient(70deg, #2C2E39, #16181E)",
      paddingTop: "2rem",
      overflow: "hidden",
      position: "relative",
      [theme.breakpoints.down(981)]: {
        backgroundColor: "#242734",
      },
    },
    cardGrid: {
      overflow: "auto",
      display: "grid",
      gridTemplateColumns: "37rem 37rem",
      gridColumnGap: "3rem",
      justifyContent: "center",
      [theme.breakpoints.down(1300)]: {
        gridTemplateColumns: "30rem 30rem",
        gridColumnGap: "3rem",
      },
      [theme.breakpoints.down(1100)]: {
        gridTemplateColumns: "27rem 27rem",
        gridColumnGap: "2rem",
      },
      [theme.breakpoints.down(981)]: {
        gridTemplateColumns: "1fr",
      },
    },
    title: {
      color: "white",
      fontWeight: "bolder",
      fontSize: "6rem",
      lineHeight: "8rem",
      textAlign: "center",
      fontFamily: "Gilroy, sans-serif",
      [theme.breakpoints.down(845)]: {
        fontSize: "4rem",
        lineHeight: "7rem",
      },
      [theme.breakpoints.down(544)]: {
        fontSize: "3rem",
        lineHeight: "5rem",
      },
      [theme.breakpoints.down(436)]: {
        fontSize: "2.3rem",
        lineHeight: "4rem",
      },
      [theme.breakpoints.down(335)]: {
        fontSize: "2rem",
        lineHeight: "3.5rem",
      },
    },
    bar: {
      background:
        "linear-gradient(90deg, rgba(255, 155, 33, 1) 0%, rgba(232,118,19,1) 100%)",
      borderRadius: "0.3rem",
      height: "1rem",
      width: "8rem",
      marginLeft: "auto",
      marginRight: "auto",
      [theme.breakpoints.down(544)]: {
        height: "0.7rem",
      width: "6rem",
      },
      [theme.breakpoints.down(370)]: {
        height: "0.5rem",
        width: "5rem",
      },
    },
    cardBody: {
      overflow: "auto",
      backgroundColor: "#242734",
      [theme.breakpoints.down(981)]: {
        backgroundColor: "#333645",
      },

      [theme.breakpoints.down(1300)]: {
        maxWidth: "30rem",
      },
      [theme.breakpoints.down(1100)]: {
        maxWidth: "26rem",
      },
      height: "auto",
      maxWidth: "37rem",
      [theme.breakpoints.down(445)]: {
        maxWidth: "19rem",
      },
      [theme.breakpoints.down(335)]: {
        maxWidth: "17rem",
      },
      [theme.breakpoints.down(316)]: {
        maxWidth: "15rem",
      },
      marginLeft: "auto",
      marginRight: "auto",
      padding: "1.5rem",
      paddingBottom: "3rem",
      marginBottom: "2rem",
      textAlign: "center",
      marginTop: "2rem",
      borderRadius: "1rem",
      transform:
        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
      "&:hover": {
        transform:
          "translate3d(0px, -30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(-1deg, 1deg)",
        transition: "all 200ms cubic-bezier(.164, .317, .38, .767)",
        boxShadow: "10px 10px 15px -1px rgba(0, 0, 0, 0.21)",
      },
      "&:not(:hover)": {
        transform:
          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
        transition: "all 200ms cubic-bezier(.164, .317, .38, .767)",
      },
    },
    cardTitle: {
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      fontSize: "3.25rem",
      lineHeight: '3.5rem',
      [theme.breakpoints.down(445)]: {
        fontSize: "2rem",
        lineHeight: "2.3rem",
      },
    },
    para: {
      fontSize: "1.5rem",
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      [theme.breakpoints.down(445)]: {
        fontSize: "1rem",
      },
    },
    Button: {
      background:
        "linear-gradient(90deg, rgba(255, 155, 33, 1) 0%, rgba(232,118,19,1) 100%)",
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
      marginTop: "1rem",
      marginBottom: "3rem",
      textAlign: "center",
    },
  })
)
const card = (img: string, title: string, description: string) => {
  const classes = useStyles()
  return (
    <div className={classes.cardBody}>
      <div>
        <img src={img} alt="card image" />
      </div>
      <div className={classes.cardTitle}>{title}</div>
      <div className={classes.para}>{description}</div>
    </div>
  )
}
export default function PanelFive() {
  const classes = useStyles()

  // Ref for intersection observer
  const sectionRef4 = useRef(null)

  const intersection = useIntersection(sectionRef4, {
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
        fadeOut(".fadeIn4")
      : fadeIn(".fadeIn4")
  }, [intersection])

  return (
    <div className={classes.root}>
      <div ref={sectionRef4}>
        <div className="fadeIn4">
          <div className={classes.title}>Accomplishments</div>
          <div className={classes.bar} />
          <br />
          <div className={classes.cardGrid}>
            {card(
              friends,
              "Youth Council",
              "Served as the Chair of Engagement and Outreach and the Vice Chair of Health and Wellness in the City of Edmonton Youth Council"
            )}
            {card(
              council,
              "Municipal Issues",
              "Currently a Research and Policy Advisor with extensive grasp on municipal issues"
            )}
            {card(
              city,
              "ParityYEG",
              "Currently serving as Vice Chair of Research for ParityYEG"
            )}
            {card(
              home,
              "Community",
              "Currently serving on Prince Rupert Community League as Communications Lead"
            )}
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
