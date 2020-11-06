const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const lollyTemplate = path.resolve("./src/templates/lollytemplate.tsx")

  const { data } = await graphql(`
    query MyQuery {
      GetLollies {
        getLollies {
          link
        }
      }
    }
  `)
  console.log("gatsby-node", data)
  data.GetLollies.getLollies.forEach(lolly => {
    createPage({
      component: lollyTemplate,
      path: `lolly/${lolly.link}`,
      context: {
        link: lolly.link,
      },
    })
  })
}
