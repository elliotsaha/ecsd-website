import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import nightSky from "../../img/nightSky.jpg"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      overflow: "hidden",
    },
    imageContainer: {
      overflow: "hidden",
    },
    imageOuter: {
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "45%",
      height: "100%",
      transform: "translate(-50%, -50%)",
      zIndex: -1,
    },
    image: {
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
      height: "90vh",
      fontFamily: "Poppins, sans-serif",
      fontWeight: "bolder",
      fontSize: "5rem",
      lineHeight: "6rem",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "auto",
      [theme.breakpoints.down(450)]: {
        fontSize: "3rem",
        lineHeight: "4rem",
      },
    },
  })
)
export default function PanelOne() {
  const data = useStaticQuery(graphql`
    query {
      nightSkyGatsby: file(relativePath: { eq: "nightSky.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 5000, quality: 100) {
            ...GatsbyImageSharpFluid
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
      <div className={classes.text}>About Rajah</div>
    </div>
  )
}
