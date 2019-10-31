import React, { Component } from "react"
import { Heading } from "react-bulma-components/dist"
import CreateUserForm from "@/components/CreateUser"

const CreateUser = props => (
  <div>
    <Heading>Create User</Heading>
    <CreateUserForm id={props.match.params.id} />
  </div>
)

export default CreateUser
