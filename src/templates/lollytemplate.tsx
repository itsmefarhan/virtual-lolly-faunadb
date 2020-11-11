import React from "react"
import Header from "../components/header"
// import { Lolly } from "../components/Lolly"
// import Result from "../components/result"


// interface Props {
//   data: {
//     GetLollies: {
//       getLolly: {
//         topFlavor: string
//         middleFlavor: string
//         bottomFlavor: string
//         to: string
//         from: string
//         message: string
//         link: string
//       }
//     }
//   }
// }

const LollyTemplate = () => {
  
  return (
    <div>
      <Header />
      {/* <div className="vlform">
        <div>
          <Lolly
            top={getLolly.topFlavor}
            middle={getLolly.middleFlavor}
            bottom={getLolly.bottomFlavor}
          />
        </div>

        <Result
          link={getLolly.link}
          to={getLolly.to}
          from={getLolly.from}
          message={getLolly.message}
        />
      </div> */}
    </div>
  )
}

export default LollyTemplate
