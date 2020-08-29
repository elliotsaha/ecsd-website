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
      letterSpacing: "0.6rem",
      marginLeft: "0.5rem",
      fontSize: "2.3rem",
      paddingBottom: "1rem",
      lineHeight: "2.5rem",
      fontWeight: "bold",
      paddingTop: "4rem",
      marginRight: '0.5rem',
      [theme.breakpoints.down(950)]: {
        fontSize: "2.3rem",
        letterSpacing: "0.4rem",
      },
      [theme.breakpoints.down(530)]: {
        fontSize: "1.6rem",
        lineHeight: "2rem",
        letterSpacing: "0.1rem",
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
      fontSize: '2rem',
      fontWeight: 600
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
            Deuteronomy 31:6 “Be strong and courageous. Do not be afraid or
            terrified because of them for the Lord your God goes with you; he
            will never leave you nor forsake you.”
          </span>{" "}
          The story of Nehemiah takes place during a time after Abraham, Moses
          and David and a time before Jesus. There were no miraculous signs from
          God as to what the Jews should do to take action after being ruled by
          kings, foreign armies and being exiled from their lands. But Nehemiah
          trusted that God was on their side.
          <br />
          <br />
          We are at a point where we need to combine our faith with our actions
          to protect the oppressed. Faith and deeds work hand in hand. While the
          Jews trusted that God was on their side, it was not an excuse to sit
          back. They knew that they were acting through God by championing
          social action, helping the oppressed and building a better future
          through faith in God. Our faith strengthens us to be proactive. In
          1979, the Student Resource Officer Program (SRO) was established in
          collaboration with the Edmonton Police Services, Edmonton Catholic and
          Edmonton Public School Boards.
          <br />
          <br />
          The effectiveness and necessity of this program has not been reviewed
          for quite some time. In fact, it has not been reviewed since its
          inception in 1979. However, we do know that having a program like this
          brings active policing into schools. Students are fined expensive
          bylaw fees, forced to unlock their phones, part of entrapment programs
          (The Bait Phone Program), arrested, investigated, charged and treated
          as though they are a suspect or a criminal.
          <br />
          <br />
          Currently our school boards pay 50% of an SROs salary. A 5 year
          officer can make $100k a year, meaning our school boards are paying
          $50,000. I believe that these funds would be better suited to
          proactive initiatives and mental health resources that are known to
          have positive effects on students.
          <br />
          <br />
          While School Resources Officers are meant to help students feel safe,
          however that is not the case. The purpose of these officers is to
          contribute to an inclusive and safe learning environment. Sadly, this
          program has criminalized and targeted our BIPOC (Black, Indigenous and
          People of Colour) students within Edmonton Catholic, strengthening the
          school to prison pipeline.
          <br />
          <br />
          As well, below I have listed several accounts that I could find of
          School Resource Officers abusing their power while they were stationed
          at schools as SROs.
          <div className={classes.title}>
            Instances of abusing power on the part of SROs:
          </div>
          <ul>
            <li>
              <span className={classes.date}>2005:</span> SRO of St. Joseph High
              School (Constable Dan Williams) kicked a woman in the head in the
              course of an arrest after she bit him in the shin which was
              described by a judge as "a deliberate act delivered as an angry
              response" rather than self-defence. Racial slurs were also claimed
              to have been used during her arrest.
            </li>
            <li>
              <span className={classes.date}>2004:</span> Constable Patrick
              Hannas looked into a personal debt (specifically wanted to use the
              fact that he was a police officer to get information) but it was a
              complete conflict of interest, used the name of Constable James
              Junio to get the information
            </li>
            <li>
              <span className={classes.date}>2006:</span> Constable Patrick
              Hannas used confidential police service information to search the
              names of John Peterson Jr. and Peterson’s father for personal use
              to gain advantage for his father and to investigate for his father
              and his father’s business.
            </li>
            <li>
              <span className={classes.date}>2008:</span> Two police officers
              (Staff Sgt. Jamie Ewatski and Patrol Sgt. John Fiorilli) found
              guilty of assaulting a man in his own house (only given six month
              conditional discharges and ordered to perform 60 hours of
              community service). This gives them criminal records but no
              criminal convictions. Police officers were looking for Kevin Light
              who was hiding out in his uncle’s house. Dubois, who was drunk,
              asked the officers for a warrant and told them to leave. Fiorilli
              pushed him against the kitchen cabinets and told him he was
              obstructing a police officer. Dubois dialled 911 and told them
              that police officers were beating him up. Dubois yelled at the
              officers after Light was arrested and in turn was shoved, pushed
              to the floor, pepper-sprayed and Ewatski delivered a head-stun.
              Dubois’s thumb was also pushed back to cause pain, he was
              handcuffed then charged with assaulting a police officer.
            </li>
            <li>
              <span className={classes.date}>2005:</span> Const. Lael Sauter and
              Const. Patrick Hannas dropped off nine intoxicated homeless people
              off in north Edmonton to get them off of Whyte Avenue. Both
              officers were SROs where they had to interact daily with students
              and staff. They broke police policy when they picked up nine
              intoxicated adults but failed to take notes and left the
              passengers in a north-end parking lot instead of at a residence or
              with a responsible person.
            </li>
            <li>
              <span className={classes.date}>2009:</span> Officer took personal
              offence at a young man’s attitude and engaged in a personal fight
              with him. Terry Mishio pepper sprayed a 19-year-old, tried a head
              stun, put the teen in a prohibited choke hold, pepper sprayed him
              again, ripped off his chain and pushed the teen to the ground and
              only stopped when the teen’s friend kicked the officer. This case
              made headlines when police Chief Boyd used the case as an example
              of a growing trend where citizens attacked police officers.
              Charges against the teen were dismissed but the friend who kicked
              the officer in the head was charged with possession of a weapon (a
              baseball bat) and aggravated assault for kicking the officer in
              the head. The three officers involved in his subsequent arrest
              denied him the right to speak with a lawyer, searched his car
              without a warrant and seized his vehicle without any authority to
              do so.
            </li>
            <li>
              Constable stationed at St. Joseph tackled an Indigenous teacher,
              thinking that they were a student for wearing a hat.
            </li>
          </ul>
          Many of these cases took place while these officers were SROs or prior
          to being placed in schools. Several of these cases include officer’s
          involvement in the SRO program being used as a mitigating factor in
          sentencing. These officers are meant to deal with crime and not to
          handle the sacred responsibility of guiding and watching over our
          students
          <br />
          <br />I do not see the SRO program being vital to the intellectual,
          physical, emotional and spiritual development of our students. This
          program exposes them to harm and fear rather than forgiveness and
          understanding and believe it is within our best interests to eliminate
          this program completely and find non-violent alternatives that will be
          better for our community.
        </div>
      </div>
    </div>
  )
}
