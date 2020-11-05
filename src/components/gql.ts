import { gql } from "@apollo/client"

export const ADD_LOLLY = gql`
  mutation addLolly(
    $topFlavor: String!
    $middleFlavor: String!
    $bottomFlavor: String!
    $to: String!
    $from: String!
    $message: String!
  ) {
    addLolly(
      topFlavor: $topFlavor
      middleFlavor: $middleFlavor
      bottomFlavor: $bottomFlavor
      to: $to
      from: $from
      message: $message
    ) {
      from
      to
      message
      link
    }
  }
`
