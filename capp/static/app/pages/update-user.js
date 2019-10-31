import React, { Component } from "react"
import { Heading } from "react-bulma-components/dist"
import UserForm from "@/components/UserForm"

const UpdateUser = props => (
  <div>
    <Heading>Update User</Heading>
    <UserForm id={props.match.params.id} />
  </div>
)

export default UpdateUser
