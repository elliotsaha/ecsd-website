import React, { useEffect, useRef } from "react"
import { useIntersection } from "react-use"
import { gsap } from "gsap"
import il1 from "../../img/illustrations/il1.png"
import il2 from "../../img/illustrations/il2.png"
import il3 from "../../img/illustrations/il3.png"
import il4 from "../../img/illustrations/il4.png"
import il5 from "../../img/illustrations/il5.png"
import il6 from "../../img/illustrations/il6.png"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "linear-gradient(80deg, #2C2E39, #16181E)",
      paddingTop: "3rem",
      overflow: "hidden",
      position: "relative",
      [theme.breakpoints.down(981)]: {
        backgroundColor: "#242734",
      },
    },
    cardGrid: {
      overflow: "hidden",
      maxWidth: "120rem",
      display: "grid",
      gridColumnGap: "5rem",
      gridTemplateColumns: "1fr 1fr 1fr",
      [theme.breakpoints.down(1390)]: {
        gridTemplateColumns: "1fr 1fr",
        gridColumnGap: "2.5rem",
      },
      [theme.breakpoints.down(862)]: {
        gridTemplateColumns: "1fr",
      },
    },
    title: {
      color: "white",
      fontWeight: "bolder",
      fontSize: "6rem",
      lineHeight: "7rem",
      textAlign: "center",
      fontFamily: "Gilroy, sans-serif",
      [theme.breakpoints.down(845)]: {
        fontSize: "5rem",
        lineHeight: "6rem",
      },
      [theme.breakpoints.down(445)]: {
        fontSize: "4rem",
        lineHeight: "5rem",
      },
      [theme.breakpoints.down(380)]: {
        fontSize: "3rem",
        lineHeight: "4rem",
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
      [theme.breakpoints.down(445)]: {
        height: "0.7rem",
      width: "6rem",
      },
      [theme.breakpoints.down(380)]: {
        height: "0.5rem",
        width: "5rem",
      },
    },
    cardBody: {
      overflow: "hidden",
      backgroundColor: "#303344",
      [theme.breakpoints.down(981)]: {
        backgroundColor: "#333645",
      },
      height: "auto",
      maxWidth: "25rem",
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
      fontSize: "1.7rem",
      lineHeight: "2.2rem",
      paddingBottom: "0.5rem",
      [theme.breakpoints.down(330)]: {
        fontSize: "1.4rem",
        lineHeight: "1.8rem",
      },
    },
    para: {
      fontSize: "1.1rem",
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      [theme.breakpoints.down(330)]: {
        fontSize: "1rem",
        lineHeight: "1.4rem",
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
    cardContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    link: {
      boxShadow: "0 0 0 0",
      textDecoration: "none",
    },
  })
)
const card = (
  img: string,
  title: string,
  description: string,
  link: string
) => {
  const classes = useStyles()
  return (
    <div className={classes.cardBody}>
      <Link to={link} className={classes.link}>
        <div>
          <img src={img} alt="card image" />
        </div>
        <div className={classes.cardTitle}>{title}</div>
        <div className={classes.para}>{description}</div>
      </Link>{" "}
    </div>
  )
}
export default function PanelThree() {
  const classes = useStyles()
  // Ref for intersection observer
  const sectionRef2 = useRef(null)

  const intersection = useIntersection(sectionRef2, {
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
        fadeOut(".fadeIn2")
      : fadeIn(".fadeIn2")
  }, [intersection])

  return (
    <div className={classes.root}>
      <div ref={sectionRef2}>
        <div className="fadeIn2">
          <div className={classes.title}>Initiatives</div>
          <div className={classes.bar} />
          <br />
          <div className={classes.cardContainer}>
            <div className={classes.cardGrid}>
              {card(
                il1,
                "Mental Health and Wellness Support",
                "Going forward, I would like our school board to be honest about the mental health experiences within our schools and re-evaluate our resources to better serve our students.",
                "/initiatives/mental-health-and-wellness-support"
              )}
              {card(
                il2,
                "Elimination of the School Resource Officer Program",
                "This program exposes them to harm and fear rather than forgiveness and understanding and believe it is within our best interests to find non-violent alternatives that will be better for our community.",
                "/initiatives/elimination-of-the-school-resource-officer-program"
              )}
              {card(
                il3,
                "Inclusion and Understanding",
                "As a community we need to show better understanding of everyone’s cultures. This includes newcomers and immigrant families, our Indigenous families and those with learning disabilities.",
                "/initiatives/inclusion-and-understanding"
              )}
              {card(
                il4,
                "Better Learning Supports",
                "We are not incomplete if we have disabilities. It should be understood that disabilities are not separate from a person’s identity and should not be separated from their learning experiences.",
                "/initiatives/better-learning-supports"
              )}
              {card(
                il5,
                "LGBTQ2S+ Resources",
                "All children should feel safe within their community, cared for and loved. They should know that they are precious, God has shaped them and intended for them to be their truest self.",
                "/initiatives/lgbtq2s-resources"
              )}
              {card(
                il6,
                "Collaboration",
                "Learning is a lifelong journey of spiritual growth and fulfillment. Another part of our duty is to prepare students for their missions in life.",
                "/initiatives/collaboration"
              )}
            </div>
          </div>

          <div className={classes.buttonContainer}>
            <Link to="/initiatives">
              <Button className={classes.Button}>Read More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
