import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'


// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="HomePage">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage

        alt="Image From Local"
        src="../images/icon.png"
      ></StaticImage>
    </Layout>

  )
}

export default IndexPage
