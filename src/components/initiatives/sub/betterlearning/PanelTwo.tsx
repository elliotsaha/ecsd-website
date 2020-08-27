import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "#E1E1EB",
      fontFamily: "Gilroy, sans-serif",
      paddingTop: "3rem",
      paddingBottom: "3rem",
    },
    titleTop: {
      textTransform: "uppercase",
      textAlign: "center",
      letterSpacing: "1.25rem",
      marginLeft: "0.75rem",
      fontSize: "2.5rem",
      paddingBottom: "0.4rem",
      lineHeight: "2.5rem",
      fontWeight: "bold",
      paddingTop: "1rem",
    },
    title: {
      textTransform: "uppercase",
      textAlign: "center",
      letterSpacing: "0.5rem",
      marginLeft: "0.5rem",
      fontSize: "2.3rem",
      paddingBottom: "1rem",
      lineHeight: "2.5rem",
      fontWeight: "bold",
      paddingTop: "4rem",
    },
    paraCenter: {
      fontFamily: "Gilroy, sans-serif",
      textAlign: "center",
      fontSize: "1.7rem",
      maxWidth: "63rem",
      paddingRight: "2rem",
      paddingLeft: "2rem",
      lineHeight: "2.1rem",
      paddingTop: "0.35rem",
    },
    paraContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    para: {
      fontSize: "1.6rem",
      maxWidth: "70rem",
      paddingRight: "2rem",
      paddingLeft: "2rem",
    },
    highlight: {
      paddingBottom: "0.2rem",
      backgroundColor: "rgba(255, 155, 33, 0.32)",
      transition: "all 0.2s ease",
      fontStyle: "italic",
    },
    date: {
      fontSize: "2rem",
      fontWeight: 600,
    },
  })
)
export default function PanelTwo() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.paraContainer}>
        <div className={classes.para}>
          <span className={classes.highlight}>
            John 9:1-3 “And Jesus, while passing by saw a man blind from birth.
            And his disciples asked him “Rabbi, who sinned, this man or his
            parents, that he would be born blind?” Jesus responded: “neither
            this man nor his parents sinned, but it was so that the works of God
            would be made manifest in him.”
          </span>{" "}
          <br />
          <br />
          We are not incomplete if we have disabilities. It should be understood
          that disabilities are not separate from a person’s identity and should
          not be separated from their learning experiences, especially their
          religious journeys. Challenges related to disabilities are caused by
          the disability but our ableist society and lack of proper support.
          Building a robust network of support for those who need it would only
          help to serve our community.
          <br />
          <br />
          <ul>
            <li>Disciplinary policies</li>
            <li>Trauma informed approach</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
