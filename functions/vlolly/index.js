const { ApolloServer, gql } = require("apollo-server-lambda")
const faunadb = require("faunadb")
const q = faunadb.query
const shortid = require("shortid")

const client = new faunadb.Client({
  secret: process.env.FAUNADB,
})

const typeDefs = gql`
  type Query {
    getLollies: [lolly]
  }
  type lolly {
    id: ID!
    topFlavor: String!
    middleFlavor: String!
    bottomFlavor: String!
    sender: String!
    reciever: String!
    message: String!
    link: String!
  }
  type Mutation {
    addLolly(
      topFlavor: String!
      middleFlavor: String!
      bottomFlavor: String!
      sender: String!
      reciever: String!
      message: String!
    ): lolly
  }
`

const resolvers = {
  Query: {
    getLollies: async (root, args, context) => {
      try {
        const result = await client.query(
          q.Map(
            q.Paginate(q.Match(q.Index("lollypop"))),
            q.Lambda(x => q.Get(x))
          )
        )
        // console.log(result.data)

        return result.data.map(item => {
          // console.log(item.ref.id)
          return {
            id: item.ref.id,
            topFlavor: item.data.topFlavor,
            middleFlavor: item.data.middleFlavor,
            bottomFlavor: item.data.bottomFlavor,
            reciever: item.data.reciever,
            sender: item.data.sender,
            message: item.data.message,
            link: item.data.link,
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
  },
  Mutation: {
    addLolly: async (
      _,
      { topFlavor, middleFlavor, bottomFlavor, sender, reciever, message }
    ) => {
      console.log(
        topFlavor,
        middleFlavor,
        bottomFlavor,
        sender,
        reciever,
        message
      )
      const result = await client.query(
        q.Create(q.Collection("lollypop"), {
          data: {
            topFlavor,
            middleFlavor,
            bottomFlavor,
            sender,
            reciever,
            message,
            link: shortid.generate(),
          },
        })
      )

      return result.data
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
})
