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
      paddingTop: "5rem",
      paddingBottom: "5rem",
      zIndex: 20,
      [theme.breakpoints.down(981)]: {
        backgroundColor: "#333645",
      },
    },
    title: {
      color: "white",
      fontWeight: "bolder",
      fontSize: "5rem",
      lineHeight: "6rem",
      marginRight: "0.5rem",
      marginLeft: "0.5rem",
      paddingBottom: "0.5rem",
      [theme.breakpoints.down(600)]: {
        fontSize: "4rem",
        lineHeight: "4.7rem",
        paddingBottom: '0.5rem',
      },
      [theme.breakpoints.down(350)]: {
        fontSize: "3rem",
        lineHeight: "5rem",
        paddingBottom: 0,
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
      [theme.breakpoints.down(600)]: {
        height: "0.7rem",
      width: "6rem",
      },
      [theme.breakpoints.down(350)]: {
        height: "0.5rem",
        width: "5rem",
      },
    },
    para: {
      color: "white",
      fontSize: "1.75rem",
      maxWidth: "50rem",
      [theme.breakpoints.down(1181)]: {
        paddingRight: "3rem",
        paddingLeft: "3rem",
      },
      [theme.breakpoints.down(400)]: {
        paddingRight: '1rem',
        paddingLeft: '1rem',
        fontSize: '1.2rem',
      },
    },
    paraContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
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
          <div className={classes.title}>Why ECSD</div>
          <div className={classes.bar} />
          <br />
          <div className={classes.paraContainer}>
            <div className={classes.para}>
              Our spirituality and faith are always growing. Looking back at my
              schooling experience and the experiences of my peers I have such
              fondness in what I was able to learn and find comfort in. When I
              think of Edmonton Catholic I think of my family.
              <br />
              <br />
              That being said, I do know that many people do not have the
              greatest experience with Catholicism. There is a complicated past
              that has left generational trauma for our Indigenous Folx that we
              need to continuously work at reconciling. At the very least, we
              should help our young people navigate this system at this crucial
              time in their lives.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
