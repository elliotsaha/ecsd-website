import React, { useState } from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
    },
    card: {
      position: "relative",
      width: "30rem",
      overflow: "hidden",
      fontFamily: "Gilroy, sans-serif",
      borderRadius: "1.5rem",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
      [theme.breakpoints.down(500)]: {
        width: "23rem",
      },
      [theme.breakpoints.down(380)]: {
        width: "19rem",
      },
      [theme.breakpoints.down(320)]: {
        width: "15rem",
      },
    },
    imageContainer: {
      position: "absolute",
      zIndex: -1,
    },
    image: {
      height: "20rem",
      width: "30rem",
      objectFit: "cover",
      filter: "brightness(40%)",
      margin: 0,
      position: "absolute",
      zIndex: -1,
    },
    text: {
      zIndex: 2,
    },
    title: {
      paddingTop: "7rem",
      textTransform: "uppercase",
      textAlign: "center",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      color: "white",
      letterSpacing: "0.15rem",
      fontSize: "2rem",
      [theme.breakpoints.down(500)]: {
        paddingTop: "6rem",
        fontSize: "1.7rem",
      },
      [theme.breakpoints.down(380)]: {
        paddingTop: "6rem",
        fontSize: "1.4rem",
      },
    },
    mainText: {
      paddingTop: "7rem",
      padding: "1.5rem",
      [theme.breakpoints.down(500)]: {
        paddingTop: "9.5rem",
      },
      [theme.breakpoints.down(380)]: {
        paddingTop: "10.5rem",
      },
      [theme.breakpoints.down(320)]: {
        paddingTop: "8rem",
      },
    },
    readMore: {
      color: "#F3881A",
      fontWeight: 800,
      textTransform: "uppercase",
      fontSize: "1rem",
      display: "flex",
      alignItems: "center",
      margin: 0,
      paddingTop: "2rem",
    },
    icon: {
      verticalAlign: "middle",
      fontSize: "0.85rem",
      marginBottom: "0.2rem",
      marginLeft: "0.5rem",
    },
  })
)
export default function PanelTwo({
  image,
  title,
  paragraph,
  link,
  titleModifier
}: any) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <div className={classes.imageContainer}>
          <Img fluid={image} className={classes.image} />
        </div>

        <div className={classes.text}>
          <div className={titleModifier}>{title}</div>
          <div className={classes.mainText}>
            <div>{paragraph}</div>
            <Link to={`/initiatives/${link}`}>
              <div className={classes.readMore}>
                <span>Read More</span>
                <span>
                  <ArrowForwardIosRoundedIcon className={classes.icon} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
