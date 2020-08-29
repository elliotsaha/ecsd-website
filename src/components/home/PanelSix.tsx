import React, { useEffect, useRef } from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { useIntersection } from "react-use"
import RajahMaggayBlue from "../../img/RajahMaggayBlue.png"
import Button from "@material-ui/core/Button"
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded"
import Arrow from "../../img/Arrow.svg"
import { gsap } from "gsap"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "linear-gradient(70deg, #2C2E39, #16181E)",
      paddingTop: "2rem",
      overflow: "hidden",
      position: "relative",
      paddingBottom: "4rem",
      [theme.breakpoints.down(981)]: {
        backgroundColor: "#333645",
      },
      [theme.breakpoints.down(550)]: {
        display: "block",
        paddingTop: "1rem",
      },
      [theme.breakpoints.down(470)]: {
        paddingBottom: "3rem",
      },
    },
    bar: {
      marginLeft: "auto",
      marginRight: "auto",
      background:
        "linear-gradient(90deg, rgba(255, 155, 33, 1) 0%, rgba(232,118,19,1) 100%)",
      borderRadius: "0.3rem",
      height: "1rem",
      width: "8rem",
      marginBottom: "2.6rem",
      [theme.breakpoints.down(544)]: {
        height: "0.7rem",
      width: "6rem",
      },
      [theme.breakpoints.down(370)]: {
        height: "0.5rem",
        width: "5rem",
      },
    },
    title: {
      lineHeight: "9rem",
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      fontSize: "6rem",
      [theme.breakpoints.down(544)]: {
        fontSize: "5rem",
        lineHeight: '6rem',
      },
    },
    content: {
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down(1240)]: {
        flexDirection: "column",
      },
    },
    blogContainer: {
      marginTop: "auto",
      marginBottom: "auto",
    },
    infoContainer: {
      display: "grid",
      [theme.breakpoints.down(1240)]: {
        maxWidth: "60%",
        marginLeft: "auto",
        marginRight: "auto",
      },
      [theme.breakpoints.down(968)]: {
        maxWidth: "70%",
      },
      [theme.breakpoints.down(784)]: {
        maxWidth: "80%",
      },
      [theme.breakpoints.down(700)]: {
        maxWidth: "90%",
      },
      [theme.breakpoints.down(620)]: {
        maxWidth: "100%",
      },
    },
    infoDate: {
      gridColumnStart: "1",
      color: "#9D9D9D",
      fontFamily: "Gilroy, sans-serif",
      fontSize: "1.2rem",
      paddingRight: "2rem",
      paddingLeft: "2rem",
      [theme.breakpoints.down(1240)]: {
        paddingLeft: "1rem",
      },
      [theme.breakpoints.down(700)]: {
        display: "none",
      },
      paddingBottom: "1.5rem",
      paddingTop: "1.5rem",
    },
    infoTitle: {
      gridColumnStart: "2",
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      fontSize: "1.7rem",
      lineHeight: "2rem",
      paddingBottom: "3rem",
      paddingTop: "1.5rem",
      maxWidth: '18rem',
      [theme.breakpoints.down(700)]: {
        display: "none",
      },
    },
    arrowContainer: {
      gridColumnStart: "3",
      fontSize: "1.35rem",
      paddingLeft: "2rem",
      paddingBottom: "1.5rem",
      paddingTop: "1.7rem",
      [theme.breakpoints.down(700)]: {
        display: "none",
      },
    },
    image: {
      width: "35rem",
      marginRight: "3rem",
      [theme.breakpoints.down(1240)]: {
        width: "40rem",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: '3rem',
      },
      [theme.breakpoints.down(770)]: {
        width: '70%',
      },
      [theme.breakpoints.down(600)]: {
        width: '20rem',
      },
      [theme.breakpoints.down(340)]: {
        width: '90%',
      },
    },
    topContainer: {
      marginRight: "auto",
      marginLeft: "auto",
    },
    topBody: {
      display: "flex",
    },
    arrow: {},

    infoContainerMobile: {
      display: "none",
      [theme.breakpoints.down(700)]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    infoTD: {
      marginBottom: "3rem",
      marginRight: '1.5rem',
      marginLeft: '1.5rem',
    },
    titleMobile: {
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      fontSize: "1.7rem",
      lineHeight: "2rem",
      [theme.breakpoints.down(310)]: {
        fontSize: "1.4rem",
      },
    },
    dateMobile: {
      color: "#9D9D9D",
      fontFamily: "Gilroy, sans-serif",
      fontSize: "1.2rem",
      [theme.breakpoints.down(310)]: {
        fontSize: "1rem",
      },
    },
    arrowMobile: {
      marginLeft: '0.5rem',
      background:
        "linear-gradient(90deg, rgba(255, 155, 33, 1) 0%, rgba(232,118,19,1) 100%)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
    link: {
      boxShadow: '0 0 0 0',
      textDecoration: 'none',
      color: 'white',
    },
  })
)
export default function PanelSix() {
  const classes = useStyles()
  // Ref for intersection observer
  const sectionRef5 = useRef(null)

  const intersection = useIntersection(sectionRef5, {
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
        fadeOut(".fadeIn5")
      : fadeIn(".fadeIn5")
  }, [intersection])

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMM DD, YYYY")
              title
              description
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 70) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      RajahMaggayBlueGatsby: file(relativePath: { eq: "RajahMaggayBlue.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div className={classes.root}>
      <div ref={sectionRef5}>
        <div className="fadeIn5">
          <div className={classes.topBody}>
            <div className={classes.topContainer}>
              <div className={classes.title}>Blog</div>
              <div className={classes.bar} />
            </div>
          </div>

          <div className={classes.content}>
            <Img
              fluid={data.RajahMaggayBlueGatsby.childImageSharp.fluid}
              className={classes.image}
              loading="eager"
            />
            <div className={classes.blogContainer}>
              <div className={classes.infoContainer}>
                
 <span className={classes.infoDate}>{data.allMarkdownRemark["edges"][0]["node"]["frontmatter"]["date"]}</span>
 
                <div className={classes.infoTitle}>
             <Link to={data.allMarkdownRemark["edges"][0]["node"]["fields"]["slug"]} className={classes.link}>{data.allMarkdownRemark["edges"][0]["node"]["frontmatter"]["title"]}</Link>
                </div>
                <div className={classes.arrowContainer}>
                <Link to={data.allMarkdownRemark["edges"][0]["node"]["fields"]["slug"]} className={classes.link}><img src={Arrow} alt="Arrow" /></Link>
                </div>
                
               

                <span className={classes.infoDate}>{data.allMarkdownRemark["edges"][1]["node"]["frontmatter"]["date"]}</span>
                <div className={classes.infoTitle}><Link to={data.allMarkdownRemark["edges"][1]["node"]["fields"]["slug"]} className={classes.link}>{data.allMarkdownRemark["edges"][1]["node"]["frontmatter"]["title"]}</Link></div>
                <div className={classes.arrowContainer}>
                <Link to={data.allMarkdownRemark["edges"][1]["node"]["fields"]["slug"]} className={classes.link}><img src={Arrow} alt="Arrow" /></Link>
                </div>

                <span className={classes.infoDate}>{data.allMarkdownRemark["edges"][2]["node"]["frontmatter"]["date"]}</span>
                <div className={classes.infoTitle}>
                <Link to={data.allMarkdownRemark["edges"][2]["node"]["fields"]["slug"]} className={classes.link}>
                  {data.allMarkdownRemark["edges"][2]["node"]["frontmatter"]["title"]}
                </Link>
                </div>
                <div className={classes.arrowContainer}>
                <Link to={data.allMarkdownRemark["edges"][2]["node"]["fields"]["slug"]} className={classes.link}><img src={Arrow} alt="Arrow" className={classes.arrow} /></Link>
                </div>

              </div>
              <div className={classes.infoContainerMobile}>
                <div>
                <Link to={data.allMarkdownRemark["edges"][0]["node"]["fields"]["slug"]} className={classes.link}>
                  <div className={classes.infoTD}>
                    <div className={classes.dateMobile}>
                    {data.allMarkdownRemark["edges"][0]["node"]["frontmatter"]["date"]}
                    </div>
                    <div className={classes.titleMobile}>
                    {data.allMarkdownRemark["edges"][0]["node"]["frontmatter"]["title"]}
                      <span className={classes.arrowMobile}>&rarr;</span>
                    </div>
                  </div>
                </Link>
                  
                <Link to={data.allMarkdownRemark["edges"][1]["node"]["fields"]["slug"]} className={classes.link}>
                      <div className={classes.infoTD}>
                    <div className={classes.dateMobile}>
                    {data.allMarkdownRemark["edges"][1]["node"]["frontmatter"]["date"]}
                    </div>
                    <div className={classes.titleMobile}>
                    {data.allMarkdownRemark["edges"][1]["node"]["frontmatter"]["title"]}
                      <span className={classes.arrowMobile}>&rarr;</span>
                    </div>
                  </div>
                </Link>
              
                <Link to={data.allMarkdownRemark["edges"][2]["node"]["fields"]["slug"]} className={classes.link}>
                  <div className={classes.infoTD}>
                    <div className={classes.dateMobile}>
                    {data.allMarkdownRemark["edges"][2]["node"]["frontmatter"]["date"]}
                    </div>
                    <div className={classes.titleMobile}>
                    {data.allMarkdownRemark["edges"][2]["node"]["frontmatter"]["title"]}
                      <span className={classes.arrowMobile}>&rarr;</span>
                    </div>
                  </div>
                </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
