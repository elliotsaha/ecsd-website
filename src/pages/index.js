import React from "react"
import PanelOne from "../components/home/PanelOne"
import SEO from "../components/seo"
import Layout from "../components/Layout"
export default function index() {
  return (
    <Layout>
        <SEO title="Home" />
        <PanelOne />
    </Layout>
  )
}
