import React from "react"
import Layout from "../components/Layout"
import PanelOne from "../components/about/PanelOne"
import PanelTwo from "../components/about/PanelTwo"
export default function about() {
  return (
    <Layout>
      <PanelOne />
      <PanelTwo />
    </Layout>
  )
}
