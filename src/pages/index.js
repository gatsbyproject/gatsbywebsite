import React from "react"


import HomePage from './HomePage'
import SEO from "../components/seo"

// Create Import File
import "./index.scss"
const IndexPage = () => {

  return (
    <>
      <HomePage />
      <SEO title="Home" />
    </>
  )
}

export default IndexPage
