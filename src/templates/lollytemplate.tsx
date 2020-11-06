import React from "react"
import Header from "../components/header"
import { Lolly } from "../components/Lolly"
import Result from "../components/result"
import { graphql } from "gatsby"

interface Props {
  data: {
    topFlavor: string
    middleFlavor: string
    bottomFlavor: string
    to: string
    from: string
    message: string
    link: string
  }
}

export const query = graphql`
  query GetLolly($link: String!) {
    getLolly(link: $link) {
      topFlavor
      middleFlavor
      bottomFlavor
      to
      from
      message
      link
    }
  }
`

const LollyTemplate = ({ data }: Props) => {
  return (
    <div>
      <Header />
      <div className="lollyFormDiv">
        <div>
          <Lolly
            top={data.topFlavor}
            middle={data.middleFlavor}
            bottom={data.bottomFlavor}
          />
        </div>

        <Result
          link={data.link}
          to={data.to}
          from={data.from}
          message={data.message}
        />
      </div>
    </div>
  )
}

export default LollyTemplate
