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
//     GetLollies {
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
//             top={data.GetLollies.getLolly.topFlavor}
//             middle={data.GetLollies.getLolly.middleFlavor}
//             bottom={data.GetLollies.getLolly.bottomFlavor}
//           />
//         </div>

//         <Result
//           link={data.GetLollies.getLolly.link}
//           to={data.GetLollies.getLolly.to}
//           from={data.GetLollies.getLolly.from}
//           message={data.GetLollies.getLolly.message}
//         />
//       </div>
//     </div>
//   )
// }

// export default LollyTemplate
