import React from "react"
import {Alert} from "react-bootstrap"

const AlertWarning = (props) => {
  return (
 <Alert variant={"danger"}>
        {props.title}
      </Alert>

  )
}

export default AlertWarning