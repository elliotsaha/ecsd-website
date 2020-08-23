import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import nightSky from "../../img/nightSky.jpg"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      overflow: "hidden",

    },
    videoContainer: {
      overflow: "auto",
    },
    video: {
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "45%",
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: -1,
      filter: "brightness(40%)",
    },
    text: {
      textTransform: 'uppercase',
      letterSpacing: '1.5rem',
      marginLeft: '0.75rem',
      textAlign: "center",
      width: "100%",
      height: "90vh",
      fontFamily: "Poppins, sans-serif",
      fontWeight: "bolder",
      fontSize: "5rem",
      lineHeight: '6rem',
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "auto",
      [theme.breakpoints.down(450)]: {
        fontSize: '3rem',
        lineHeight: "4rem",
    }
    },
  })
)
export default function PanelOne() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.videoContainer}>
        <img src={nightSky} className={classes.video} />
      </div>
      <div className={classes.text}>
        About Rajah
      </div>
    </div>
  )
}
