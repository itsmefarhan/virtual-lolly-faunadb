import React from "react"
import Header from "../components/header"
import { Lolly } from "../components/Lolly"
import Result from "../components/result"

interface Props {
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

const LollyTemplate = ({
  pageContext: {
    topFlavor,
    middleFlavor,
    bottomFlavor,
    to,
    from,
    message,
    link,
  },
}: Props) => {
  return (
    <div>
      <Header />
      <div className="lollyFormDiv">
        <div>
          <Lolly top={topFlavor} middle={middleFlavor} bottom={bottomFlavor} />
        </div>

        <Result link={link} to={to} from={from} message={message} />
      </div>
    </div>
  )
}

export default LollyTemplate
