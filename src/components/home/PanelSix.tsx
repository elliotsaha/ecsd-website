import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import il7 from "../../img/illustrations/il7.svg"
import Button from "@material-ui/core/Button"
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded"
import Arrow from "../../img/Arrow.svg"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#242734",
      paddingTop: "2rem",
      overflow: "auto",
      position: "relative",
      paddingBottom: "1rem",
      [theme.breakpoints.down(981)]: {
        backgroundColor: "#333645",
      },
      [theme.breakpoints.down(550)]: {
        display: "block",
        paddingTop: "1rem",
      },
    },
    bar: {
      marginLeft: "auto",
      marginRight: "auto",
      background:
        "linear-gradient(90deg, rgba(101,168,237,1) 0%, rgba(122,141,255,1) 100%)",
      borderRadius: "0.3rem",
      height: "1rem",
      width: "8rem",
      marginBottom: "1.5rem",
    },
    title: {
      lineHeight: "9rem",
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bolder",
      fontSize: "6rem",
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
        fontSize: "1.1rem",
      },
      [theme.breakpoints.down(470)]: {
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
      paddingBottom: "1.5rem",
      paddingTop: "1.5rem",
      [theme.breakpoints.down(700)]: {
        fontSize: "1.4rem",
      },
      [theme.breakpoints.down(470)]: {
        display: "none",
      },
    },
    arrowContainer: {
      gridColumnStart: "3",
      fontSize: "1.35rem",
      paddingLeft: "2rem",
      paddingBottom: "1.5rem",
      paddingTop: "1.7rem",
      [theme.breakpoints.down(600)]: {
        width: 50,
        height: 50,
        paddingTop: "2rem",
        paddingLeft: "1rem",
      },
      [theme.breakpoints.down(470)]: {
        display: "none",
      },
    },
    image: {
      width: "40rem",
      [theme.breakpoints.down(1240)]: {
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
      },
      [theme.breakpoints.down(770)]: {
        display: "none",
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
    spacer: {
      display: "block",
      [theme.breakpoints.down(470)]: {
        display: "inline",
      },
    },

    infoContainerMobile: {
      display: 'none',
      [theme.breakpoints.down(470)]: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  })
)
export default function PanelSix() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.topBody}>
        <div className={classes.topContainer}>
          <div className={classes.title}>Blog</div>
          <div className={classes.bar} />
        </div>
      </div>

      <div className={classes.content}>
        <img src={il7} className={classes.image} />
        <div className={classes.blogContainer}>
          <div className={classes.infoContainer}>
            <span className={classes.infoDate}>July 1 &#8226; Blog</span>
            <div className={classes.infoTitle}>
              What Our Community <div className={classes.spacer} />
              Deserves
            </div>
            <div className={classes.arrowContainer}>
              <img src={Arrow} alt="Arrow" />
            </div>
            <span className={classes.infoDate}>July 13 &#8226; Blog</span>
            <div className={classes.infoTitle}>
              Black Lives Matter <div className={classes.spacer} /> News
            </div>
            <div className={classes.arrowContainer}>
              <img src={Arrow} alt="Arrow" />
            </div>
            <span className={classes.infoDate}>July 18 &#8226; Blog</span>
            <div className={classes.infoTitle}>
              Feminism Icons of the <div className={classes.spacer} />
              Century
            </div>
            <div className={classes.arrowContainer}>
              <img src={Arrow} alt="Arrow" className={classes.arrow} />
            </div>
          </div>
          <div className={classes.infoContainerMobile}>
            <div>
              <div>July 1 &#8226; Blog</div>
              <div>What Our Community <br/>Deserves &rarr;</div>
            </div>
            <div>
              <div>July 1 &#8226; Blog</div>
              <div>What Our Community <br/>Deserves &rarr;</div>
            </div>
            <div>
              <div>July 1 &#8226; Blog</div>
              <div>What Our Community <br/>Deserves &rarr;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
