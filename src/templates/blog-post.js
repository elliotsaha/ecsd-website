import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Bio from "../components/blog/bio"
import BlogLayout from "../components/blog/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { mergeClasses } from "@material-ui/styles"
import PanelOne from "./PanelOne"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "#E1E1EB",
    },
    nav: {
      backgroundColor: "#16181E",
    },
    description: {
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 400,
      fontSize: "1.15rem",
    },
    listContainer: {
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `space-between`,
      listStyle: `none`,
      padding: 0,
    },
    link: {
      color: "#F1881A",
      fontFamily: "Gilroy, sans-serif",
      fontWeight: 600,
      fontSize: "1.1rem",
      textDecoration: "none",
      boxShadow: 0,
    },
    hr: {
      marginBottom: rhythm(1),
    },
  })
)
const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const classes = useStyles()
  return (
    <Layout>
      <PanelOne title={post.frontmatter.title} date={post.frontmatter.date} />
      <div className={classes.root}>
        <BlogLayout location={location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <div>
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              className={classes.description}
            />
            <hr
              className={classes.hr}
            />
          </div>

          <nav>
            <ul className={classes.listContainer}>
              <li className={classes.link}>
                {previous && (
                  <Link
                    to={previous.fields.slug}
                    rel="prev"
                    className={classes.link}
                  >
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li className={classes.link}>
                {next && (
                  <Link
                    to={next.fields.slug}
                    rel="next"
                    className={classes.link}
                  >
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </BlogLayout>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
