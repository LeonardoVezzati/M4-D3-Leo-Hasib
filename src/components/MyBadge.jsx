import React from "react"
import {Badge} from "react-bootstrap"

const MyBadge =(props)=> {
  return (
    <div>
      <h1>
        <Badge variant={props.color}>{props.text}</Badge>
      </h1>
    </div>
  )
}

export default MyBadge