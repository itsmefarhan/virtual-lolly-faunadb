import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <div className="text-center">
      <h3>Page Not Found</h3>

      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default NotFoundPage
