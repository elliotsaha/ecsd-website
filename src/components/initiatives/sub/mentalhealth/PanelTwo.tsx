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
  })
)
export default function PanelTwo() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.paraContainer}>
        <div className={classes.para}>
          <span className={classes.highlight}>
            Psalm 46:1-3 “God is our refuge and strength, a very present help in
            trouble. Therefore we will not fear, though the earth should change,
            though the mountains shake in the heart of the sea; though its
            waters roar and foam, though the mountains tremble with its tumult.”
          </span>{" "}
          To some degree we all deal with mental illness. Before I get into this
          section, I would like to tell you about my personal experiences with
          mental illness. Teachers of mine started to notice that I was quite
          anxious throughout junior high. Even before then I was an anxious kid
          but nothing more than a panicky feeling before presenting a project or
          getting teary after an altercation on the playground.
          <br />
          <br />
          However junior high was when it started to get really bad for me. I
          was comparing myself with my peers and my family and I was so
          determined to do well in school that it interfered with my health.
          During this time I was not kind to myself and wound up in a dark
          place.
          <br />
          <br />
          I was continuously anxious throughout the rest of my academic career
          suffering mostly from panic attacks. I was able to get some help from
          counsellors and friends but it wasn’t until I was put on medication
          that things really started to look up, and that wasn’t until grade 12.
          <br />
          <br />
          In 2018, 7,254 Albertans visited the Emergency Department for suicide
          attempts. 50% of all visits were made by YOUTH, ages 0-24, which means
          3,627 youth. 63-67% of LGTBQ+ youth, ages 14-25, report thoughts of
          suicide. Suicide is 5 to 6X higher for Indigenous youth than
          non-Indigenous youth. Every year, more Albertans die by suicide than
          the number of people who in die in motor vehicle collisions.
          <br />
          <br />
          Almost 20% of children and youth in Canada or roughly 1.5 million
          individuals suffer from a diagnosable psychiatric disorder. Two thirds
          of these suffered from more than one disorder and less than 20%
          receive therapeutic intervention.
          <br />
          <br />
          From a 2011 report, 80% of Albertans were not aware that about 1 in 5
          youth (aged 12 to 19) suffer from mental health problems. 89% of
          Albertans were not aware that only 1 in 4 youth with mental health
          problems receive treatment for these issues.
          <br />
          <br />
          <span className={classes.highlight}>
            2nd Corinthians 12:9-10: And he said to me: “My grace is sufficient
            for you. For virtue is perfect in weakness.” And so willingly shall
            I glory in my weaknesses, so that the virtue of Christ may be within
            me. Because of that, I am pleased in my infirmity; in my reproaches,
            in difficulties, in persecutions, in distresses, for the sake of
            Christ. For when I am weak, then I am powerful.”
          </span>
          <br />
          <br />
          Mental illness does not make you any less of a person spiritually. I’m
          fortunate enough that I got continuous help from counsellors and
          understanding staff that believed me when I told them of my struggles
          and had the patience and time to assist me. However, these same
          counsellors had very high demand. My high school had two counsellors
          and a psychiatrist. iIn my Grade 12 year, that dropped down to two
          counsellors. Between university applications and signing up for
          classes, there was little time left available to help students who
          were suffering from mental illnesses.
          <br />
          <br />
          Going forward, I would like our school board to be honest about the
          mental health experiences within our schools and re-evaluate our
          resources to better serve our students. Students are feeling an
          inordinate amount of pressure that results from pressure to succeed
          and get good grades, to bullying and new standards placed on them by
          social media. No matter what, we will always be there for our students
          and show them grace as Christ would have.
        </div>
      </div>
    </div>
  )
}
