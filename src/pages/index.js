import React from "react"
import Card1 from "../components/Card1"
import Card2 from "../components/Card2"
import HeadContainer from "../components/HeadContainer"
import Navbar from '../components/Navbar'
//import { Link } from "
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="OpenRoads" />
    <Navbar />
    <HeadContainer />
    <Card1 />
    <Card2 />
  </Layout>
)

export default IndexPage
