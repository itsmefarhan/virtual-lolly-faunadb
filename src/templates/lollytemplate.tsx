import React from "react"
import Header from "../components/header"
import { Lolly } from "../components/Lolly"
import Result from "../components/result"

interface Props {
  pageContext: {
    color1: string
    color2: string
    color3: string
    reciever: string
    sender: string
    message: string
    link: string
  }
}

const LollyTemplate = ({
  pageContext: { color1, color2, color3, reciever, sender, message, link },
}: Props) => {
  return (
    <div>
      <Header />
      <div className="lollyFormDiv">
        <div>
          <Lolly top={color1} middle={color2} bottom={color3} />
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
