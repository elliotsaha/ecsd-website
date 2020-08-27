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
            John 8:7 “He that is without sin among you, let him first cast a
            stone”
          </span>{" "}
          <br />
          <br />
          It is important for our queer youth to know that we will always walk
          together with them in the Light of Christ. As a school board we should
          set an example of acceptance and mercy. Each person is created in the
          image and likeness of God. Each child is a precious gift and a sacred
          responsibility. As catholics we believe in the goodness, dignity and
          worth of each person and that should never be exclusionary.
          <br />
          <br />
          Experiences like being a queer youth are not going away any time soon.
          As our young people discover themselves and how that identity will fit
          with their religious experience I offer you this: shouldn’t our duty
          as guides on their religious journey be to offer understanding and
          compassion?
          <br />
          <br />
          All children should feel safe within their community, cared for and
          loved. They should know that they are precious, God has shaped them
          and intended for them to be their truest self.
          <br />
          <br />
          I know that this will be a point of contention for many people, but I
          am more than open to having a chat to lay out my thought process. I
          accept the canonical Scriptures of the Old and New Testaments as the
          inspired Word of God. Despite the complex narratives and diverse
          viewpoints, the story of God’s love and mercy in Jesus is the heart of
          our scriptures.
          <br />
          <br />
          This goes back to the big principles of being a compassionate Catholic
          with Christ as our teacher of loving all people, respecting all people
          and practicing forgiveness.
          <br />
          <br />
          Going forward I would like us to have support programs that help
          LGBTQ2S+ students navigate their relationship with their faith, to
          know that God and their community is always with them. We must craft a
          safe space.
        </div>
      </div>
    </div>
  )
}
