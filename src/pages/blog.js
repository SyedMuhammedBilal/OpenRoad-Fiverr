import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from '../components/Page2Components/Header'
import SEO from "../components/seo"
import CenterBody from "../components/Page2Components/CenterBody"
import Footer2 from "../components/Page2Components/Footer2"
import Cards from "../components/Page2Components/Cards"

const Blog = () => (
  <Layout>
    <SEO title="Page two" />
    <Header />
    <CenterBody />
    <Cards />
    <Footer2 />
  </Layout>
)

export default Blog;
