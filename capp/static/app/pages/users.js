import React, { Component } from "react"
import { Heading } from "react-bulma-components/dist"
import UsersList from "@/components/Users"

const Users = props => (
  <div>
    <Heading>Users</Heading>
    <UsersList />
  </div>
)

export default Users
