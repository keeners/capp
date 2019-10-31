import React, { Component } from "react"
import { withRouter } from "react-router"

import Mutation from "@/components/Mutation"

const DELETE_USER_MUTATION = "deleteUser"

class DeleteUser extends Component {
  render() {
    return (
      <Mutation
        mutation={DELETE_USER_MUTATION}
        variables={{ id: this.props.id }}
      >
        {(deleteUser, { error }) => (
          <button
            onClick={async () => {
              if (confirm("Are you sure you want to delete this user?")) {
                try {
                  await deleteUser()
                  this.props.history.push("/users/")
                } catch (error) {
                  alert(error.message)
                }
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    )
  }
}

export default withRouter(DeleteUser)
