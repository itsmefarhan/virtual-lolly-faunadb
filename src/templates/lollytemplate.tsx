import React from "react"
import Header from "../components/header"
import { Lolly } from "../components/Lolly"
import Result from "../components/result"

const LollyTemplate = ({
  pageContext: {
    topFlavor,
    middleFlavor,
    bottomFlavor,
    reciever,
    sender,
    message,
    link,
  },
}: any) => {
  return (
    <div>
      <Header />
      <div className="lollyFormDiv">
        <div>
          <Lolly top={topFlavor} middle={middleFlavor} bottom={bottomFlavor} />
        </div>

        <Result
          link={link}
          reciever={reciever}
          sender={sender}
          message={message}
        />
      </div>
    </div>
  )
}

export default LollyTemplate
