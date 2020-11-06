// import React from "react"
// import Header from "../components/header"
// import { Lolly } from "../components/Lolly"
// import Result from "../components/result"
// import { graphql } from "gatsby"

// // interface Props {
// //   data: {
// //     get_lollies: {
// //       topFlavor: string
// //       middleFlavor: string
// //       bottomFlavor: string
// //       to: string
// //       from: string
// //       message: string
// //       link: string
// //     }
// //   }
// // }

// export const query = graphql`
//   query MyQuery($link: String!) {
//     get_lollies {
//       getLolly(link: $link) {
//         topFlavor
//         middleFlavor
//         bottomFlavor
//         to
//         from
//         message
//         link
//       }
//     }
//   }
// `

// const LollyTemplate = ({ data }: any) => {
//   return (
//     <div>
//       <Header />
//       <div className="lollyFormDiv">
//         <div>
//           <Lolly
//             top={data.get_lollies.getLolly.topFlavor}
//             middle={data.get_lollies.getLolly.middleFlavor}
//             bottom={data.get_lollies.getLolly.bottomFlavor}
//           />
//         </div>

//         <Result
//           link={data.get_lollies.getLolly.link}
//           to={data.get_lollies.getLolly.to}
//           from={data.get_lollies.getLolly.from}
//           message={data.get_lollies.getLolly.message}
//         />
//       </div>
//     </div>
//   )
// }

// export default LollyTemplate
