import React, { Component } from "react"
import { withRouter } from "react-router"
import styled from "styled-components"

import Query from "@/components/Query"
import Mutation from "@/components/Mutation"

const SINGLE_USER_QUERY = "getUser"
const UPDATE_USER_MUTATION = "updateUser"

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleChange = e => {
      const { name, type, value } = e.target
      const val = type === "number" ? parseFloat(value) : value
      this.setState({ [name]: val })
    }
  }

  render() {
    return (
      <Query query={SINGLE_USER_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>
          if (!data) return <p>No User Found for ID {this.props.id}</p>
          return (
            <Mutation mutation={UPDATE_USER_MUTATION} variables={this.state}>
              {(updateUser, { loading, error }) => (
                <form
                  action=""
                  onSubmit={async e => {
                    // Stop the form from submitting
                    e.preventDefault()
                    // call the mutation
                    const res = await updateUser({
                      id: this.props.id,
                      ...this.state,
                    })
                    // change them to the single item page
                    console.log("User Updated", res)
                  }}
                >
                  <div>{error}</div>
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="name">
                      Name
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        defaultValue={data.name}
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
                        defaultValue={data.email}
                        onChange={this.handleChange}
                      />
                    </label>

                    <button type="submit">Submit</button>
                  </fieldset>
                </form>
              )}
            </Mutation>
          )
        }}
      </Query>
    )
  }
}

export default withRouter(User)
