import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import BlogLayout from "../components/blog/layout"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Card from "@material-ui/core/Card"
import PanelOne from "../components/blog/PanelOne"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "#E1E1EB",
    },
    imageContainer: {
      margin: 0,
      marginLeft: "auto",
      [theme.breakpoints.down(740)]: {
        marginRight: "auto",
        marginLeft: "1rem",
      },
    },
    image: {
      width: "15.5rem",
      objectFit: "cover",
      height: "15.5rem",
      borderRadius: "1.5rem",
      [theme.breakpoints.down(400)]: {
        width: "10.5rem",
        objectFit: "cover",
        height: "10.5rem",
        borderRadius: "1.1rem",
      },
    },
    cardBody: {
      overflow: "auto",
      paddingBottom: "4rem",
      paddingTop: "0em",
    },
    title: {
      margin: "1rem",
      marginBottom: 0,
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
      fontSize: "2.5rem",
      color: "black",
      [theme.breakpoints.down(740)]: {
        fontSize: "2.3rem",
      },
      [theme.breakpoints.down(450)]: {
        fontSize: "1.7rem",
      },
    },
    date: {
      marginLeft: "1rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
      color: "#F3881A",
      opacity: 1,
      fontSize: '1.1rem',
    },
    container: {
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down(740)]: {
        flexDirection: "column-reverse",
        marginRight: "auto",
        marginLeft: "auto",
      },
    },
    paragraph: {
      marginLeft: "1rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 650,
      color: "#424242",
      opacity: 0.8,
      fontSize: '1.1rem',
    },
    textContainer: {
      paddingRight: "3rem",
      marginTop: 'auto',
      marginBottom: 'auto',
      [theme.breakpoints.down(740)]: {
        maxWidth: "30rem",
      },
      [theme.breakpoints.down(400)]: {
        fontSize: "0.9rem",
      },
    },
    link: {
      boxShadow: "none",
      margin: 0,
    },
    panelTwoContainer: {
      [theme.breakpoints.down(740)]: {
        marginRight: 'auto',
        marginLeft: 'auto',
      },
    },
  })
)
const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.root}>
        <SEO title="All posts" />
        <PanelOne />

          <BlogLayout location={location} title={"Blog"}> 
          <div className={classes.panelTwoContainer}>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (       
                
                <div key={node.fields.slug} className={classes.cardBody}>
                  <Link className={classes.link} to={node.fields.slug}>
                    <div className={classes.container}>
                      <div className={classes.textContainer}>
                        <h3 className={classes.title}>{title}</h3>
                        <div className={classes.date}>
                          {node.frontmatter.date}
                        </div>

                        <div className={classes.paragraph}>
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                node.frontmatter.description || node.excerpt,
                            }}
                          />
                        </div>
                      </div>
                      <div className={classes.imageContainer}>
                        <Img
                          fluid={
                            node.frontmatter.thumbnail.childImageSharp.fluid
                          }
                          className={classes.image}
                        />
                      </div>
                    </div>
                  </Link>{" "}
                </div> 
                
              )
            })}
            </div>
          </BlogLayout>
       
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 300, quality: 70) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
