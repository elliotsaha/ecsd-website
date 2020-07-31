import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { mergeClasses } from "@material-ui/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#242734",
      fontFamily: "Gilroy, sans-serif",
	  textAlign: "center",
	  paddingTop: '3rem',
	  paddingBottom: '6rem'
    },
    title: {
      color: "white",
      fontWeight: "bolder",
	  fontSize: "6rem",
	  lineHeight: '8rem',
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
    para: {
      color: "white",
      fontSize: "1.5rem",
      paddingRight: "20rem",
      paddingLeft: "20rem",
      [theme.breakpoints.down(1181)]: {
        paddingRight: "3rem",
        paddingLeft: "3rem",
      },
    },
  })
)
export default function PanelTwo() {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.title}>Vision</div>
        <div className={classes.bar} />
        <br />
        <div className={classes.para}>
          As a collective, we should create a unique community-based identity
          that is fortified in collaboration and the equitable treatment of all
          citizens.
          <br />
          <br />
          This vision includes increased safety and the space to not just
          survive but thrive. In our constantly evolving city we have the
          opportunity to be proactive about the actions we take and to define
          the very path that will shape our communities for generations to come.
        </div>
      </div>
    </div>
  )
}
