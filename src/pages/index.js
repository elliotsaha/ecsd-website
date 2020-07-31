import React from "react"
import PanelOne from "../components/home/PanelOne"
import PanelTwo from "../components/home/PanelTwo"
import SEO from "../components/seo"
import Layout from "../components/Layout"
export default function index() {
  return (
    <Layout>
        <SEO title="Home" />
        <PanelOne />
        <PanelTwo />
    </Layout>
  )
}
