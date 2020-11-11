const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const lollyTemplate = path.resolve("./src/templates/lollytemplate.tsx")

  const { data } = await graphql(`
    {
      GetLollies {
        getLollies {
          link
          topFlavor
          middleFlavor
          bottomFlavor
          to
          from
          message
        }
      }
    }
  `)

  data.GetLollies.getLollies.forEach(lolly => {
    createPage({
      component: lollyTemplate,
      path: `lolly/${lolly.link}`,
      context: {
        link: lolly.link,
        topFlavor: lolly.topFlavor,
        middleFlavor: lolly.middleFlavor,
        bottomFlavor: lolly.bottomFlavor,
        to: lolly.to,
        from: lolly.from,
        message: lolly.message,
      },
    })
  })
}
