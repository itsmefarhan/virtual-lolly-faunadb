import React from "react"
import Header from "../components/header"
import { Lolly } from "../components/Lolly"
import Result from "../components/result"

export interface Props {
  pageContext: {
    topFlavor: string
    middleFlavor: string
    bottomFlavor: string
    to: string
    from: string
    message: string
    link: string
  }
}

const LollyTemplate = ({ pageContext }: Props) => {
  return (
    <div>
      <Header />
      <div className="vlform">
        <div>
          <Lolly
            top={pageContext.topFlavor}
            middle={pageContext.middleFlavor}
            bottom={pageContext.bottomFlavor}
          />
        </div>

        <Result
          link={pageContext.link}
          to={pageContext.to}
          from={pageContext.from}
          message={pageContext.message}
        />
      </div>
    </div>
  )
}

export default LollyTemplate
