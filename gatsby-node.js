// const path = require("path")
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const { data } = await graphql(`
//     query MyQuery {
//       get_lollies {
//         getLollies {
//           link
//         }
//       }
//     }
//   `)

//   data.get_lollies.getLollies.forEach(({ link }) => {
//     createPage({
//       path: `lolly/${link}`,
//       component: path.resolve("./src/templates/lollytemplate.tsx"),
//       context: {
//         link: link,
//       },
//     })
//   })
// }
