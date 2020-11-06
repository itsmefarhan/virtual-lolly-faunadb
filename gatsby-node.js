const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

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
  data.GetLollies.getLollies.forEach(({ link }) => {
    createPage({
      path: `lolly/${link}`,
      component: path.resolve("./src/templates/lollytemplate.tsx"),
      context: {
        link: link,
      },
    })
  })
}
