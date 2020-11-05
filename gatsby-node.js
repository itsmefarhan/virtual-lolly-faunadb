const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      get_lollies {
        getLollies {
          topFlavor
          middleFlavor
          bottomFlavor
          link
          from
          to
          message
        }
      }
    }
  `)

  data.get_lollies.getLollies.forEach(node => {
    createPage({
      path: `lolly/${node.link}`,
      component: path.resolve("./src/templates/lollytemplate.tsx"),
      context: {
        topFlavor: node.topFlavor,
        middleFlavor: node.middleFlavor,
        bottomFlavor: node.bottomFlavor,
        link: node.link,
        message: node.message,
        from: node.from,
        to: node.to,
      },
    })
  })
}
