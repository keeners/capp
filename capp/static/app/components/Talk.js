import React, { Component } from "react"
import styled from "styled-components"

import Query from "@/components/Query"

const SINGLE_TALK_QUERY = "getTalk"

class Talk extends Component {
  render() {
    return (
      <Query query={SINGLE_TALK_QUERY} variables={{ id: this.props.id }}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error: {error.message}</p>
          return (
            <div>
              <h2>{data.name}</h2>
              <img src={data.logo} alt="" />
              <dl>
                <dt>Description</dt>
                <dd>{data.description}</dd>
                <dt>Slug</dt>
                <dd>{data.slug}</dd>
              </dl>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Talk
