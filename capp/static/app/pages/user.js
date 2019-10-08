import React, { Component } from "react"
import { Heading } from "react-bulma-components/dist"
import UserDetails from "@/components/User"

const User = props => (
  <div>
    <Heading>User ID: {props.match.params.id}</Heading>
    <UserDetails id={props.match.params.id} />
  </div>
)

export default User
