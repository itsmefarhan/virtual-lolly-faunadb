import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <div className="text-center">
      <h3 className="text-white">Page Not Found</h3>
      <p className="text-white">
        If your link is correct then your lolly is freezing. Please try again 2
        minutes later
      </p>

      <Link to="/" className="text-white">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFoundPage
