import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Heading, Button } from "react-bulma-components/dist"
import UserDetails from "@/components/User"
import DeleteUser from "@/components/DeleteUser"

const User = props => (
  <div>
    <Heading>User ID: {props.match.params.id}</Heading>
    <Button to={`/users/${props.match.params.id}/update/`} renderAs={Link}>
      Edit User
    </Button>
    <DeleteUser id={props.match.params.id}>DeleteUser</DeleteUser>
    <UserDetails id={props.match.params.id} />
  </div>
)

export default User
