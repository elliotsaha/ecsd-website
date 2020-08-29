import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "#E1E1EB",
      fontFamily: "Gilroy, sans-serif",
      paddingTop: "1.5rem",
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
      [theme.breakpoints.down(950)]: {
        fontSize: "2.3rem",
      },
      [theme.breakpoints.down(530)]: {
        fontSize: "1.8rem",
        lineHeight: "2rem",
        letterSpacing: "0.2rem",
        marginLeft: "0.1rem",
      },
    },
    title: {
      textTransform: "uppercase",
      textAlign: "center",
      letterSpacing: "1.25rem",
      marginLeft: "0.5rem",
      fontSize: "2.3rem",
      paddingBottom: "1rem",
      lineHeight: "2.5rem",
      fontWeight: "bold",
      paddingTop: "4rem",
      marginRight: '0.5rem',
      [theme.breakpoints.down(950)]: {
        fontSize: "2.3rem",
      },
      [theme.breakpoints.down(530)]: {
        fontSize: "1.8rem",
        lineHeight: "2rem",
        letterSpacing: "0.2rem",
        marginLeft: "0.1rem",
        marginRight: '0.1rem',
      },
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
      [theme.breakpoints.down(950)]: {
        fontSize: "1.3rem",
      },
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
      [theme.breakpoints.down(950)]: {
        fontSize: "1.3rem",
      },
    },
    highlight: {
      paddingBottom: "0.2rem",
      backgroundColor: "rgba(255, 155, 33, 0.32)",
      transition: "all 0.2s ease",
      fontStyle: "italic",
    },
    bold: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: '2.5rem',
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
            Jeremiah 29:11 “For surely I know the plans I have for you, says the
            Lord, plans for your welfare and not for harm, to give you a future
            with hope.”
          </span>{" "}
          <br />
          <br />
          <span className={classes.bold}>In the “Why Edmonton Catholic” Section I mentioned</span> that many
          guardians/parents and families are concerned that children and young
          people are not as interested in learning about Catholicism and that we
          need to adapt our forms of engagement to show students the value of
          learning in this type of environment.
          <br />
          <br />
          First we must focus on the quality of our Catholic Education. We need
          to work together with all forms of governance to show God’s love in
          tangible ways to everyone in our communities and how it is used to
          help people from all walks of life.
          <br />
          <br />
          True trust in God, compels us to stand up and act and when our
          students feel that compulsion we will know that they are truly engaged
          in the Edmonton Catholic mission.
          <br />
          <br />
          It is important to note that all students learn in different ways. I
          could read chapters of the Bible every day but that would not have
          much value if I did not truly reflect and understand them, understand
          God or how I should live by them.
          <br />
          <br />
          God wants quality time from us. Quality over quantity. God is always
          with our students as they learn, even if he is not right in front of
          us we are able to respond through discernment, service and prayer.
          <br />
          <br />
          Learning is a lifelong journey of spiritual growth and fulfillment.
          Another part of our duty is to prepare students for their missions in
          life. To encourage this learning I will lobby the current government
          for more funding to deliver quality education and to better equip our
          staff who work tirelessly to create Christ-centred communities that
          service each other.
          <br />
          <br />I would like to see ECSD more engaged with the rest of the
          community and the families that they serve to build better
          understanding, accountability and a sense of trust. As well,
          additional forms like social media should be utilized to better hear
          feedback and create a dialog with our communities.
        </div>
      </div>
    </div>
  )
}
