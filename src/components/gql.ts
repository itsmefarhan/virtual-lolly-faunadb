import { gql } from "@apollo/client"

export const ADD_LOLLY = gql`
  mutation addLolly(
    $color1: String!
    $color2: String!
    $color3: String!
    $reciever: String!
    $sender: String!
    $message: String!
  ) {
    addLolly(
      color1: $color1
      color2: $color2
      color3: $color3
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
