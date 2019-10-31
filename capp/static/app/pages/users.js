import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Heading, Button } from "react-bulma-components/dist"
import UsersList from "@/components/Users"

const Users = props => (
  <div>
    <Heading>Users</Heading>
    <Button to="/users/create/" renderAs={Link}>
      Create User
    </Button>
    <UsersList />
  </div>
)

export default Users
