import React, { Component } from "react"
import { withRouter } from "react-router"
import styled from "styled-components"

import Mutation from "@/components/Mutation"

const CREATE_USER_MUTATION = "createUser"
const UPDATE_USER_MUTATION = "updateUser"

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
    }

    this.handleChange = e => {
      const { name, type, value } = e.target
      const val = type === "number" ? parseFloat(value) : value
      this.setState({ [name]: val })
    }
  }

  render() {
    return (
      <Mutation mutation={CREATE_USER_MUTATION} variables={this.state}>
        {(createUser, { loading, error }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error: {error.message}</p>
          return (
            <div>
              <form
                action=""
                onSubmit={async e => {
                  // Stop the form from submitting
                  e.preventDefault()
                  // call the mutation
                  const res = await createUser()
                  // change them to the single item page
                  console.log("User Form Submitted", res)
                  this.props.history.push(`/users/${res.id}/`)
                }}
              >
                <fieldset disabled={loading} aria-busy={loading}>
                  <label htmlFor="name">
                    Name
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </label>

                  <label htmlFor="email">
                    Email
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </label>

                  <button type="submit">Submit</button>
                </fieldset>
              </form>
            </div>
          )
        }}
      </Mutation>
    )
  }
}

export default withRouter(User)
