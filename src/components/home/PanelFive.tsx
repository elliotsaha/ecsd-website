import React from "react"
import city from "../../img/Accomplishments/city.png"
import home from "../../img/Accomplishments/home.png"
import friends from "../../img/Accomplishments/friends.png"
import council from "../../img/Accomplishments/council.png"

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#333645",
      paddingTop: "3rem",
      overflow: "auto",
      position: "relative",
      [theme.breakpoints.down(981)]: {
        backgroundColor: "#242734",
      },
    },
    cardGrid: {
      overflow: "auto",
      display: "grid",
      gridTemplateColumns: "37rem 37rem",
      gridColumnGap: "3rem",
      justifyContent: "center",
      [theme.breakpoints.down(1300)]: {
        gridTemplateColumns: "30rem 30rem",
        gridColumnGap: "3rem",
      },
      [theme.breakpoints.down(1100)]: {
        gridTemplateColumns: "27rem 27rem",
        gridColumnGap: "2rem",
      },
      [theme.breakpoints.down(981)]: {
        gridTemplateColumns: "1fr",
      },
    },
    title: {
      color: "white",
      fontWeight: "bolder",
      fontSize: "6rem",
      lineHeight: "8rem",
      textAlign: "center",
      fontFamily: "Gilroy, sans-serif",
      [theme.breakpoints.down(845)]: {
        fontSize: "4rem",
      },
      [theme.breakpoints.down(544)]: {
        fontSize: "3rem",
      },
      [theme.breakpoints.down(436)]: {
        fontSize: "2.3rem",
      },
    },
    bar: {
      background:
        "linear-gradient(90deg, rgba(101,168,237,1) 0%, rgba(122,141,255,1) 100%)",
      borderRadius: "0.3rem",
      height: "1rem",
      width: "8rem",
      marginLeft: "auto",
      marginRight: "auto",
    },
    cardBody: {
      overflow: "auto",
      backgroundColor: "#242734",
      [theme.breakpoints.down(981)]: {
        backgroundColor: "#333645",
      },
      
      [theme.breakpoints.down(1300)]: {
        maxWidth: "30rem",
      },
      [theme.breakpoints.down(1100)]: {
        maxWidth: "26rem",
      },
      height: "auto",
      maxWidth: "37rem",
      [theme.breakpoints.down(445)]: {
        maxWidth: "19rem",
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
      fontSize: "3.25rem",
      [theme.breakpoints.down(445)]: {
        fontSize: "2rem",
      },
    },
    para: {
      fontSize: "1.5rem",
      color: "white",
      fontFamily: "Gilroy, sans-serif",
      [theme.breakpoints.down(445)]: {
        fontSize: "1.1rem",
      },
    },
    Button: {
      background:
        "linear-gradient(90deg, rgba(101,168,237,1) 0%, rgba(122,141,255,1) 100%)",
      padding: "1rem",
      paddingRight: "2rem",
      paddingLeft: "2rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 800,
      textTransform: "none",
      color: "white",
      [theme.breakpoints.down(981)]: {
        fontSize: "1rem",
      },
    },
    buttonContainer: {
      marginTop: "1rem",
      marginBottom: "3rem",
      textAlign: "center",
    },
  })
)
const card = (img: string, title: string, description: string) => {
  const classes = useStyles()
  return (
    <div className={classes.cardBody}>
      <div>
        <img src={img} alt="card image" />
      </div>
      <div className={classes.cardTitle}>{title}</div>
      <div className={classes.para}>{description}</div>
    </div>
  )
}
export default function PanelFive() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.title}>Accomplishments</div>
      <div className={classes.bar} />
      <br />
      <div className={classes.cardGrid}>
        {card(
          friends,
          "Youth Council",
          "Member of City of Edmonton Youth Council since 2016, served as the Chair of Engagement and Outreach and the Vice Chair of Health and Wellness"
        )}
        {card(
          council,
          "Municipal Issues",
          "Currently a Research and Policy Advisor with extensive grasp on municipal issues"
        )}
        {card(
          city,
          "ParityYEG",
          "Currently serving as Vice Chair of Research for ParityYEG"
        )}
        {card(
          home,
          "Community",
          "Currently serving on Prince Rupert Community League as Communications Lead"
        )}
      </div>
      <div className={classes.buttonContainer}>
        <Button className={classes.Button}>Read More</Button>
      </div>
    </div>
  )
}
