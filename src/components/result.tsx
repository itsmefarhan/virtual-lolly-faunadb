import React from "react"
import "../styles/Result.css"

export interface ResultProps {
  link: string
  to: string
  message: string
  from: string
}

const Result: React.FC<ResultProps> = ({ link, to, message, from }) => {
  return (
    <div className="result">
      <h4>Share lolly with this link:</h4>
      <h3>{`https://virtual-lolly-faunadb.netlify.app/lolly/${link}`}</h3>
      <div className="res_detail">
        <p className="to">{to}</p>
        <p className="message">{message}</p>
        <p className="from">____{from}</p>
      </div>
    </div>
  )
}

export default Result
