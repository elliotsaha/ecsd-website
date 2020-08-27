import React from "react"
import Card from "./misc/Card"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"
import nightSky from "../../img/nightSky.jpg"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "4rem",
      paddingBottom: "4rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridGap: "2rem",
      [theme.breakpoints.down(1015)]: {
        gridTemplateColumns: "1fr",
      },
    },
    shift: {
      paddingTop: "3rem",
    },
    rowGap: {
      paddingTop: "1rem",
      paddingBottom: "1rem",
    },

    title: {
        paddingTop: "7rem",
        textTransform: "uppercase",
        textAlign: "center",
        fontFamily: "Gilroy, sans-serif",
        fontWeight: "bolder",
        color: "white",
        letterSpacing: "0.15rem",
        fontSize: "2rem",
        [theme.breakpoints.down(500)]: {
          paddingTop: "6rem",
          fontSize: "1.7rem",
        },
        [theme.breakpoints.down(380)]: {
          paddingTop: "6rem",
          fontSize: "1.4rem",
        },
      },
      title3Lines: {
          marginBottom: '-2rem',
        paddingTop: "5.5rem",
        textTransform: "uppercase",
        textAlign: "center",
        fontFamily: "Gilroy, sans-serif",
        fontWeight: "bolder",
        color: "white",
        letterSpacing: "0.15rem",
        fontSize: "2rem",
        [theme.breakpoints.down(500)]: {
          paddingTop: "6rem",
          fontSize: "1.7rem",
        },
        [theme.breakpoints.down(380)]: {
          paddingTop: "6rem",
          fontSize: "1.4rem",
        },
        [theme.breakpoints.down(310)]: {
          paddingTop: "7rem",
          fontSize: "1.1rem",
        },
      },
      title1Line: {
        marginBottom: '1.5rem',
        paddingTop: "9rem",
        textTransform: "uppercase",
        textAlign: "center",
        fontFamily: "Gilroy, sans-serif",
        fontWeight: "bolder",
        color: "white",
        letterSpacing: "0.15rem",
        fontSize: "2rem",
        [theme.breakpoints.down(500)]: {
          paddingTop: "6rem",
          fontSize: "1.7rem",
        },
        [theme.breakpoints.down(380)]: {
          paddingTop: "6rem",
          fontSize: "1.4rem",
        },
      },    
  })
)

export default function PanelTwo() {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      nightSkyGatsby: file(relativePath: { eq: "nightSky.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        <div>
          <Card
            image={data.nightSkyGatsby.childImageSharp.fluid}
            title={"Mental Health and Wellness Support"}
            paragraph={
              "Going forward, I would like our school board to be honest about the mental health experiences within our schools and re-evaluate our resources to better serve our students. Students are feeling an inordinate amount of pressure that results from pressure to succeed and get good grades, to bullying and new standards placed on them by social media. No matter what, we will always be there for our students and show them grace as Christ would have."
            }
            link={"mental-health-and-wellness-support"}
            titleModifier={classes.title}
          />
          <div className={classes.rowGap} />
          <Card
            image={data.nightSkyGatsby.childImageSharp.fluid}
            title={"Inclusion and Understanding"}
            paragraph={
              "Stephanie Tait said, “We serve a big, multidimensional God and he is mirrored in all of us, in the array of cultures, races, genders, personalities, neurotypes, sexual orientations and abilities to reflect His glorious image.” His design is a complex diverse tapestry. We need to review our policies to see if there is anything we are currently doing that is segmenting our full tapestry from being seen."
            }
            link={"inclusion-and-understanding"}
            titleModifier={classes.title}
          />
          <div className={classes.rowGap} />
          <Card
            image={data.nightSkyGatsby.childImageSharp.fluid}
            title={"LGBTQ2S+ Resources"}
            paragraph={
              "It is important for our queer youth to know that we will always walk together with them in the Light of Christ. As a school board we should set an example of acceptance and mercy. Each person is created in the image and likeness of God. Each child is a precious gift and a sacred responsibility. As catholics we believe in the goodness, dignity and worth of each person and that should never be exclusionary."
            }
            link={"lgbtq2s-resources"}
            titleModifier={classes.title1Line}
          />
        </div>
        <div className={classes.shift}>
          <Card
            image={data.nightSkyGatsby.childImageSharp.fluid}
            title={"ELIMINATION OF THE SCHOOL RESOURCE OFFICER PROGRAM"}
            paragraph={
              "I do not see the SRO program being vital to the intellectual, physical, emotional and spiritual development of our students. This program exposes them to harm and fear rather than forgiveness and understanding and believe it is within our best interests to eliminate this program completely and find non-violent alternatives that will be better for our community."
            }
            link={"elimination-of-the-school-resource-officer-program"}
    
            titleModifier={classes.title3Lines}
          />
          <div className={classes.rowGap} />
          <Card
            image={data.nightSkyGatsby.childImageSharp.fluid}
            title={"BETTER LEARNING SUPPORTS"}
            paragraph={
              "We are not incomplete if we have disabilities. It should be understood that disabilities are not separate from a person’s identity and should not be separated from their learning experiences, especially their religious journeys. Challenges related to disabilities are caused by the disability but our ableist society and lack of proper support. Building a robust network of support for those who need it would only help to serve our community."
            }
            link={"better-learning-supports"}
            titleModifier={classes.title}
          />
          <div className={classes.rowGap} />
          <Card
            image={data.nightSkyGatsby.childImageSharp.fluid}
            title={"COLLABORATION"}
            paragraph={
              "Learning is a lifelong journey of spiritual growth and fulfillment. Another part of our duty is to prepare students for their missions in life. To encourage this learning I will lobby the current government for more funding to deliver quality education and to better equip our staff who work tirelessly to create Christ-centred communities that service each other. I would like to see ECSD more engaged with the rest of the community and the families that they serve to build better understanding, accountability and a sense of trust."
            }
            link={"collaboration"}
            titleModifier={classes.title1Line}
          />
        </div>
      </div>
    </div>
  )
}
