import React from "react"
import il1 from "../../img/illustrations/il1.png"
import il2 from "../../img/illustrations/il2.png"
import il3 from "../../img/illustrations/il3.png"
import il4 from "../../img/illustrations/il4.png"
import il5 from "../../img/illustrations/il5.png"
import il6 from "../../img/illustrations/il6.png"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#333645",
      paddingTop: "3rem",
      overflow: "auto",
      position: 'relative',
      [theme.breakpoints.down(981)]: {
        backgroundColor: "#242734",
      },
    },
    cardGrid: {
      overflow: "auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      [theme.breakpoints.down(1264)]: {
        gridTemplateColumns: "1fr 1fr",
      },
      [theme.breakpoints.down(845)]: {
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
        fontSize: "5rem",
      },
      [theme.breakpoints.down(445)]: {
        fontSize: "4rem",
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
      height: "auto",
      maxWidth: "25rem",
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
      fontSize: "1.7rem",
    },
    para: {
      fontSize: "1.1rem",
      color: "white",
      fontFamily: "Gilroy, sans-serif",
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
      marginTop: '1rem',
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
export default function PanelThree() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.title}>Initiatives</div>
      <div className={classes.bar} />
      <br />
      <div className={classes.cardGrid}>
        {card(
          il1,
          "Safety For All",
          "Each person in this city deserves to move through their communities safely. We need to create more safe spaces"
        )}
        {card(
          il2,
          "The Way We Use Our Space",
          "Areas I would also like to build on centre around chronic homelessness and how we use our public spaces."
        )}
        {card(
          il3,
          "Civic Participation",
          "We should make civic engagement more accessible and support constituents who have never participated in local government before."
        )}
        {card(
          il4,
          "Social Action",
          "We should always think about the social equity impacts that these decisions will have on people of all backgrounds."
        )}
        {card(
          il5,
          "Enviromental Stewardship",
          "it will be a priority for us to make sure our infrastructure is able to withstand any extreme weather conditions."
        )}
        {card(
          il6,
          "Regional Prosperity",
          "With the economic impacts of COVID-19, we need to create a shift to additional support for local businesses."
        )}
      </div>
      <div className={classes.buttonContainer}>
        <Button className={classes.Button}>Read More</Button>
      </div>
    </div>
  )
}
