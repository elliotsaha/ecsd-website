import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
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
    imageContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "3rem",
    },
    image: {
      width: "70rem",
      margin: 0,
    },
  })
)
export default function PanelTwo() {
  const data = useStaticQuery(graphql`
    query {
      RajahMaggay3People: file(relativePath: { eq: "RajahMaggay3People.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1150, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      RajahMaggayGroup: file(relativePath: { eq: "RajahMaggayGroup.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      RajahMaggayDesk: file(relativePath: { eq: "RajahMaggayDesk.png" }) {
        childImageSharp {
          fluid(maxWidth: 1150, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.titleTop}>Mission Statement</div>
      <div className={classes.paraContainer}>
        <div className={classes.paraCenter}>
          Supporting every student’s religious journey with inclusion, grace,
          honesty and forgiveness.
        </div>
      </div>

      <div className={classes.imageContainer}>
        <Img
          fluid={data.RajahMaggay3People.childImageSharp.fluid}
          className={classes.image}
          loading="auto"
        />
      </div>

      <div className={classes.title}>Your Next ECSB Trustee</div>
      <div className={classes.paraContainer}>
        <div className={classes.para}>
          My name is Rajah Maggay and I’m running to be your Ward 75 Edmonton
          Catholic School Board Trustee.
          <br />
          <br />
          The Catholic school{" "}
          <span className={classes.highlight}>
            “must be a place of mercy freely given, where everyone can feel
            welcomed, loved, forgiven and encouraged to live the good life of
            the Gospel.” (The Joy of the Gospel, 114)
          </span>
          <br />
          <br />
          Community and collaboration are the foundation of a welcoming society
          that is inclusive of all people. The families within Ward 75 are
          active, engaged and represent the future of our city while maintaining
          a deep connection to the history and relationships to our land.
          <br />
          <br />
          I’ve lived in this area with my family who immigrated from the
          Philippines for 20 years. I’ve grown up here and experienced the
          benefits of attending Edmonton Catholic. Additionally, this also means
          I’ve seen the gaps that our school board faces that prevent us from
          serving our students to the best of our ability in a way that supports
          the religious journeys of all students.
          <br />
          <br />
          Our world is constantly shifting and our students more than ever are
          faced with new pressures. As your trustee I would be committed to
          transparency and honesty and would like students and families to know
          that you can live a life of great faith while adapting to these new
          realities.
        </div>
      </div>
      <div className={classes.imageContainer}>
        <Img
          fluid={data.RajahMaggayGroup.childImageSharp.fluid}
          className={classes.image}
          loading="auto"
        />
      </div>
      <div className={classes.title}>Community Involvement</div>
      <div className={classes.paraContainer}>
        <div className={classes.para}>
          <span className={classes.highlight}>
            1 John 4:16b, 18a “God is love, and those who abide in love abide in
            God, and God abides in thee. There is no fear in love, but perfect
            love casts out fear.”
          </span>
          <br />
          <br />
          My experiences with civic engagement first started with the City of
          Edmonton Youth Council, an advisory board to city council that
          expressed the viewpoints of young people throughout the city from ages
          13-23. I started with the Health and Wellness committee due to my
          passion for mental health advocacy. This led to assisting with
          multiple initiatives surrounding breaking down the stigma of mental
          illness and looking into community-based solutions to youth issues
          through collective input.
          <br />
          <br />
          During my time on youth council I spent time in different leadership
          positions such as the Vice Chair of the Health and Wellness Committee
          and the Chair of the Engagement and Outreach Committee. From planning
          events to speaking on different topics, I’ve been able to accomplish a
          lot during my years on youth council. I've spoken to school trustees,
          councillors and students all around the city to remind them not to
          count younger voices out.
          <br />
          <br />
          A great asset of CEYC was being able to go into schools to speak with
          students about their experiences and concerns. Being a young person,
          it is a great advantage to have this engagement experience and having
          the knowledge of what growing up in the Catholic school system is
          like. What better way to have true representation on the board than
          with an individual who has experienced the system and is in touch with
          what youth today go through.
          <br />
          <br />
          I currently serve on the board of ParityYEG as Vice Chair of Research
          which is a non-profit organization dedicated to getting more women
          involved in governance and on my local community league as
          Communications Lead.
          <br />
          <br />
          I have spent this last year as a Research and Policy Advisor for a
          local city councillor that has consisted of looking into local issues
          and breaking them down into digestible formats. I know that this could
          be a great asset to provide more families and students a better
          understanding of what is happening within their school board and
          getting them involved, engaged and excited.
          <br />
          <br />
          From serving on youth council, serving on my community league, to my
          experience as a Research and Policy Advisor paired with my experience
          and education in Event Management, I have a heightened understanding
          of the importance of engagement. With how our world is growing we
          should be able to adapt with it in how we engage to better spread our
          mission.
        </div>
      </div>
      <div className={classes.imageContainer}>
        <Img
          fluid={data.RajahMaggayDesk.childImageSharp.fluid}
          className={classes.image}
          loading="auto"
        />
      </div>
      <div className={classes.title}>Why Edmonton Catholic</div>
      <div className={classes.paraContainer}>
        <div className={classes.para}>
          <span className={classes.highlight}>
            Hebrews 6:19 “This hope we have as an anchor of the soul, both sure
            and steadfast.”
          </span>
          <br />
          <br />
          Our spirituality and faith are always growing. Looking back at my
          schooling experience and the experiences of my peers I have such
          fondness in what I was able to learn and find comfort in. When I think
          of Edmonton Catholic I think of my family. My family immigrated from
          the Philippines to Canada 29 years ago and like many Filipino
          families, we have strong Roman Catholic ties. Finding community in
          those early years, included finding people who shared the same faith,
          who could help us on our journey navigating this new city and country.
          Finding people to share that experience and to share in prayer was
          akin to finding a new family.
          <br />
          <br />
          That being said, I do know that many people do not have the greatest
          experience with Catholicism. There is a complicated past that has left
          generational trauma for our Indigenous Folx that we need to
          continuously work at reconciling. Many religions have also caused harm
          by shaming our LGBTQ2S+ community, leading to trauma, and in some
          cases suicide or suicidal thoughts on the part of our young people.
          Coming out and discovering yourself takes tremendous courage and
          bravery. At the very least, we should help our young people navigate
          this system at this crucial time in their lives.
          <br />
          <br />
          So why Edmonton Catholic?
          <br />
          <br />
          I know that for some families and parents it's a big concern that
          children are not as interested in learning about Catholicism. We need
          to adapt our forms of engagement to show students the value of
          learning in this type of environment. At its foundation, Catholic
          school promotes loving all people, respecting all people and
          practicing forgiveness.
          <br />
          <br />
          These values have the power to benefit students throughout their whole
          lives as they continue on their religious journeys and with how they
          decide to interact with the world. It is our duty to show students the
          importance of these values and how they will help shape them as
          inspiring and engaged members of society.
          <br />
          <br />
          We are at a pivotal moment where action is being demanded and people
          are thinking more about what they want in a community. That includes
          the schooling system. As a collective, we should create a unique
          community-based identity that is fortified in collaboration, faith and
          the equitable treatment of all citizens. This vision includes
          increased safety and the space to not just survive but thrive. We have
          the unique opportunity to be proactive about the actions we take to
          define the very path that will shape the futures of generations to
          come.
        </div>
      </div>
    </div>
  )
}
