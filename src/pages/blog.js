import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import Bio from "../components/blog/bio"
import BlogLayout from "../components/blog/layout"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: '#E1E1EB',
    },
  }))
const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.root}> 
      <SEO title="All posts" />
        <BlogLayout location={location} title={"Blog"}>
          {posts.map(({ node }) => {
            console.log(node.frontmatter)
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <div>
                  <img src={node.frontmatter.thumbnail} />
                </div>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
