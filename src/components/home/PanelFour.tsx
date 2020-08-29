import React, { useEffect, useRef } from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { useIntersection } from "react-use"
import { gsap } from "gsap"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      overflow: "hidden",
      position: "relative",
      background: "linear-gradient(30deg, #2C2E39, #16181E)",
      [theme.breakpoints.down(981)]: {
        backgroundColor: "#333645",
      },
    },
    root: {
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "center",
      justifyContent: 'center',
      paddingTop: "4rem",
      overflow: "auto",
      position: "relative",
      paddingBottom: "2.5rem",
      [theme.breakpoints.down(550)]: {
        display: "block",
        paddingTop: "3rem",
      },
    },
    text: {
      maxWidth: "50rem",
      marginLeft: "3rem",
      color: "white",
      [theme.breakpoints.down(1059)]: {
        textAlign: "center",
        marginLeft: '1.5rem',
        marginRight: '1.5rem',
      },
    },
    title: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      fontSize: "4rem",
      lineHeight: '3.5rem',
      paddingBottom: '1rem',
      [theme.breakpoints.down(420)]: {
        fontSize: "3.2rem",
        lineHeight: '3rem',
      },
      [theme.breakpoints.down(340)]: {
        fontSize: "3rem",
        lineHeight: '2.5rem',
      },
    },
    para: {
      marginTop: "1rem",
      marginRight: "7rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "normal",
      fontSize: "1.5rem",
      [theme.breakpoints.down(1444)]: {
        fontSize: "1.4rem",
        marginRight: "0rem",
      },
      [theme.breakpoints.down(1216)]: {
        fontSize: "1.2rem",
      },
      [theme.breakpoints.down(544)]: {
        fontSize: "1.25rem",
      },
      [theme.breakpoints.down(370)]: {
        fontSize: "1.1rem",
      },
      [theme.breakpoints.down(330)]: {
        fontSize: "0.95rem",
      },
    },
    bar: {
      background:
        "linear-gradient(90deg, rgba(255, 155, 33, 1) 0%, rgba(232,118,19,1) 100%)",
      borderRadius: "0.3rem",
      height: "1rem",
      width: "8rem",
      [theme.breakpoints.down(1059)]: {
        marginLeft: "auto",
        marginRight: "auto",
      },
      [theme.breakpoints.down(544)]: {
        height: "0.7rem",
      width: "6rem",
      },
      [theme.breakpoints.down(370)]: {
        height: "0.5rem",
        width: "5rem",
      },
    },
    imgContainer: {
      marginLeft: "3rem",
      marginRight: "3rem",
      display: "flex",
      marginTop: "5rem",
      [theme.breakpoints.down(1059)]: {
        display: "none",
      },
    },
    img: {
      width: "40rem",
      display: "block",
      marginTop: "auto",
      marginBottom: "auto",
      [theme.breakpoints.down(1418)]: {
        width: "35rem",
      },
      [theme.breakpoints.down(1218)]: {
        width: "30rem",
      },
      [theme.breakpoints.down(550)]: {
        margin: 0,
      },
    },
    imgContainerMobile: {
      display: "none",

      [theme.breakpoints.down(1059)]: {
        marginTop: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    imgMobile: {
      width: "70%",
      display: "block",
      [theme.breakpoints.down(590)]: {
        width: "110%",
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

  const data = useStaticQuery(graphql`
    query {
      RajahMaggayPinkGatsby: file(relativePath: { eq: "RajahMaggayPink.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={classes.body}>
      <div ref={sectionRef3}>
        <div className="fadeIn3">
          <div className={classes.root}>
            <div className={classes.imgContainer}>
              <Img
                fluid={data.RajahMaggayPinkGatsby.childImageSharp.fluid}
                className={classes.img}
                loading="eager"
              />
            </div>
            <div className={classes.text}>
              <div className={classes.title}>About Me</div>
              <div className={classes.bar} />
              <div className={classes.imgContainerMobile}>
                {/*<img src={RajahMaggayPink} className={classes.imgMobile} />*/}

                <Img
                  fluid={data.RajahMaggayPinkGatsby.childImageSharp.fluid}
                  className={classes.imgMobile}
                />
              </div>
              <div className={classes.para}>
                <div>
                  I’ve lived in this area with my family who immigrated from the
                  Philippines for 20 years. I’ve grown up here and experienced
                  the benefits of attending Edmonton Catholic. Additionally,
                  this also means I’ve seen the gaps that our school board faces
                  that prevent us from serving our students to the best of our
                  ability in a way that supports the religious journeys of all
                  students. Our world is constantly shifting and our students
                  more than ever are faced with new pressures. As your trustee I
                  would be committed to transparency and honesty and would like
                  students and families to know that you can live a life of
                  great faith while adapting to these new realities.
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
