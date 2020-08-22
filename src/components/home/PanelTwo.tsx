import React, { useRef, useEffect } from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { useIntersection } from "react-use"
import { gsap } from "gsap"
import { Tween } from "react-gsap"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "linear-gradient(50deg, #16181E, #2C2E39)",
      fontFamily: "Gilroy, sans-serif",
      textAlign: "center",
      paddingTop: "3rem",
      paddingBottom: "6rem",
      zIndex: 20,
      [theme.breakpoints.down(981)]: {
        backgroundColor: "#333645",
      },
    },
    title: {
      color: "white",
      fontWeight: "bolder",
      fontSize: "6rem",
      lineHeight: "8rem",
      [theme.breakpoints.down(445)]: {
        fontSize: "4rem",
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
    },
    para: {
      color: "white",
      fontSize: "1.75rem",
      paddingRight: "20rem",
      paddingLeft: "20rem",
      [theme.breakpoints.down(1181)]: {
        paddingRight: "3rem",
        paddingLeft: "3rem",
      },
    },
  })
)
export default function PanelTwo() {
  const classes = useStyles()
  // Ref for intersection observer
  const sectionRef1 = useRef(null)

  const intersection = useIntersection(sectionRef1, {
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
        fadeOut(".fadeIn1")
      : fadeIn(".fadeIn1")
  }, [intersection])

  return (
    <div ref={sectionRef1}>
      <div className={classes.root}>
        <div className="fadeIn1">
          <div className={classes.title}>Vision</div>
          <div className={classes.bar} />
          <br />
          <div className={classes.para}>
            As a collective, we should create a unique community-based identity
            that is fortified in collaboration and the equitable treatment of
            all citizens.
            <br />
            <br />
            This vision includes increased safety and the space to not just
            survive but thrive. In our constantly evolving city we have the
            opportunity to be proactive about the actions we take and to define
            the very path that will shape our communities for generations to
            come.
          </div>
        </div>
      </div>
    </div>
  )
}
