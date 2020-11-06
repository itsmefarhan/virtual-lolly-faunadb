import React from "react"
import { useQuery, gql } from "@apollo/client"
import Result from "../components/result"
import { Lolly } from "../components/Lolly"

const GET_LOLLY_BY_LINK = gql`
  query GET_LOLLY($link: String!) {
    getLolly(link: $link) {
      topFlavor
      middleFlavor
      bottomFlavor
      to
      from
      message
      link
    }
  }
`

const NotFoundPage = ({ location }: any) => {
  const loc = location.pathname.slice(0, 7)
  const pathLoc = location.pathname.slice(7)

  const { loading, data } = useQuery(GET_LOLLY_BY_LINK, {
    variables: { link: pathLoc },
  })

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : !!data && loc === "/lolly/" ? (
        <div className="lollyFormDiv">
          <div>
            <Lolly
              top={data.getLolly.topFlavor}
              middle={data.getLolly.middleFlavor}
              bottom={data.getLolly.bottomFlavor}
            />
          </div>

          <Result
            link={data.getLolly.link}
            to={data.getLolly.to}
            from={data.getLolly.from}
            message={data.getLolly.message}
          />
        </div>
      ) : (
        <h1 style={{ color: "white" }}>404: Not Found</h1>
      )}
    </>
  )
}

export default NotFoundPage
