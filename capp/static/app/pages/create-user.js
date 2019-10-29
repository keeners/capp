import React, { Component } from "react"
import { Heading } from "react-bulma-components/dist"
import UserForm from "@/components/UserForm"

const CreateUser = props => (
  <div>
    <Heading>Create User</Heading>
    <UserForm id={props.match.params.id} />
  </div>
)

export default CreateUser
