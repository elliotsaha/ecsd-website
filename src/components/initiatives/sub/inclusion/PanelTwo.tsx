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
            James 2:26 “As the body without the spirit is dead, faith without
            deeds is dead.”
          </span>{" "}
          <br/><br/>
          A large change that I would like to see is better learning support for all people. This includes newcomers and immigrant families, our Indigenous families and those with learning disabilities. And as a community we need to show better understanding of everyone’s cultures.
<br/><br/>
In September 2020, I was uncomfortable and angered by an altercation that I heard about. 11-year-old Emmell wore a durag to a Catholic school and was accused of having “gang affiliations.” School officials refused to apologize, Emmell’s mother was accused of being threatening and as a result Emmell was suspended. This shows that members of our school system and school board did not understand the significance of a durag and went on suggesting Anti-Black rhetoric that is harmful. 
<br/><br/>
A refusal to acknowledge the harmful mistakes that they made has only escalated the situations when the only thing since the beginning that was needed was a clear apology. As Trustee I will advocate for a review of the entire Dress Code Policy and ban any measures that are discriminatory to any cultural groups and/or gender identities. We are past the point where it is acceptable to be ignorant to the experiences and cultures of other people. 
<br/><br/>
The dress code towards our young women and girls has also been discriminatory, going against the message of respect that we are looking to spread. It is important to be dressed professionally in a learning setting. However, education and comfort should come first. 
<br/><br/>
Stephanie Tait said, “We serve a big, multidimensional God and he is mirrored in all of us, in the array of cultures, races, genders, personalities, neurotypes, sexual orientations and abilities to reflect His glorious image.” His design is a complex diverse tapestry. We need to review our policies to see if there is anything we are currently doing that is segmenting our full tapestry from being seen.  

        </div>
      </div>
    </div>
  )
}
