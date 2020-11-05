import { gql } from "@apollo/client"

export const ADD_LOLLY = gql`
  mutation addLolly(
    $topFlavor: String!
    $middleFlavor: String!
    $bottomFlavor: String!
    $reciever: String!
    $sender: String!
    $message: String!
  ) {
    addLolly(
      topFlavor: $topFlavor
      middleFlavor: $middleFlavor
      bottomFlavor: $bottomFlavor
      reciever: $reciever
      sender: $sender
      message: $message
    ) {
      sender
      reciever
      message
      link
    }
  }
`
