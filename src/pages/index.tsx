import React from "react"
import { navigate } from "gatsby"
import Header from "../components/header"
import Banner from "../components/banner"
import Button from "../components/button"
import "../styles/Index.css"

const IndexPage = () => (
  <>
    <Header />
    <Banner />
    <Button
      label="Make a new lolly to send to a friend"
      onClickFunc={() => navigate("/add")}
    />
  </>
)

export default IndexPage
