import React, { Component } from "react"
import { Heading } from "react-bulma-components/dist"
import UpdateUserForm from "@/components/UpdateUser"

const UpdateUser = props => (
  <div>
    <Heading>Update User</Heading>
    <UpdateUserForm id={props.match.params.id} />
  </div>
)

export default UpdateUser
