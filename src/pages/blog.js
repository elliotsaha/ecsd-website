import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import Bio from "../components/blog/bio"
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
        marginLeft: '1rem',
      },
    },
    image: {
      width: "13.5rem",
      objectFit: 'cover',
      height: '13.5rem',
      borderRadius: '1.5rem',
    },
    cardBody: {
      overflow: "auto",
      paddingBottom: '1rem',
      paddingTop: '1rem',
    },
    title: {
      margin: "1rem",
      marginBottom: 0,
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
      fontSize: "2.25rem",
      color: "black",
      [theme.breakpoints.down(740)]: {
        fontSize: "2rem",
      },
    },
    date: {
      marginLeft: "1rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: "bold",
      color: "#F3881A",
      opacity: 1
    },
    container: {
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down(740)]: {
        flexDirection: 'column-reverse'
      },
    },
    paragraph: {
      marginLeft: "1rem",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 650,
      color: "#424242",
      opacity: 0.8
    },
    textContainer: {
      paddingRight: '3rem',
      [theme.breakpoints.down(740)]: {
        maxWidth: '30rem',
      },
    },
    link: {
      boxShadow: 'none', 
      margin: 0
    }
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
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug} className={classes.cardBody}>
                <Link
                  className={classes.link}
                  to={`blog/${node.fields.slug}`}
                >
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
                        fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                        className={classes.image}
                      />
                    </div>
                  </div>
                  
                </Link>{" "}
              </div>
            )
          })}
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
                fluid(maxWidth: 5000, quality: 100) {
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
