import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      overflow: "hidden",
      position: 'relative',
      backgroundColor: "#E1E1EB",
      zIndex: -1,
    },
    imageContainer: {
      overflow: "hidden",
    },
    imageOuter: {
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "45%",
      height: '100%',
      transform: "translate(-50%, -50%)",
      zIndex: -1,
    },
    image: {
      height: '105%',
      objectFit: "cover",
      filter: "brightness(40%)",
    },
    text: {
      overflow: "hidden",
      textTransform: "uppercase",
      letterSpacing: "1.5rem",
      marginLeft: "0.75rem",
      textAlign: "center",
      width: "100%",
      height: "87vh",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      fontSize: "5rem",
      lineHeight: "6rem",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "auto",
      paddingRight: "0.5rem",
      paddingLeft: "0.5rem",
      [theme.breakpoints.down(950)]: {
        fontSize: "2.5rem",
        lineHeight: "4rem",
      },
      [theme.breakpoints.down(680)]: {
        fontSize: "2rem",
        lineHeight: "3rem",
      },
      [theme.breakpoints.down(530)]: {
        fontSize: "1.8rem",
        lineHeight: "2rem",
        letterSpacing: "0.1rem",
        marginLeft: "0.05rem",
      },
    },
  })
)
export default function PanelOne() {
  const data = useStaticQuery(graphql`
    query {
      nightSkyGatsby: file(relativePath: { eq: "school.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1300, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <div className={classes.imageOuter}>
          <Img fluid={data.nightSkyGatsby.childImageSharp.fluid} className={classes.image} loading="eager" />
        </div>
      </div>
      <div className={classes.text}>Elimination of the school resource officer program</div>
    </div>
  )
}
