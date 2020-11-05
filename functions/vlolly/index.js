const { ApolloServer, gql } = require("apollo-server-lambda")
const faunadb = require("faunadb")
const q = faunadb.query
const shortid = require("shortid")

const client = new faunadb.Client({
  secret: "fnAD553-CRACBWRY90jsl4ON6g-yGzCN9YPT_IRg",
})

const typeDefs = gql`
  type Query {
    getLollies: [lolly]
  }
  type lolly {
    id: ID!
    color1: String!
    color2: String!
    color3: String!
    sender: String!
    reciever: String!
    message: String!
    link: String!
  }
  type Mutation {
    addLolly(
      color1: String!
      color2: String!
      color3: String!
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
            q.Paginate(q.Documents(q.Collection("lollypop"))),
            q.Lambda(x => q.Get(x))
          )
        )
        // console.log(result.data)

        return result.data.map(item => {
          // console.log(item.ref.id)
          return {
            id: item.ref.id,
            color1: item.data.color1,
            color2: item.data.color2,
            color3: item.data.color3,
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
      { color1, color2, color3, sender, reciever, message }
    ) => {
      console.log(color1, color2, color3, sender, reciever, message)
      const result = await client.query(
        q.Create(q.Collection("lollypop"), {
          data: {
            color1,
            color2,
            color3,
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

exports.handler = server.createHandler()
