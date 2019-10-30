import React, { Component } from "react"

import api from "@/api"

class Mutation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      loading: false,
      data: [],
    }

    this.runMutation = async ({ variables }) => {
      this.setState({
        loading: true,
      })

      console.log("XXX", this.props, variables)
      try {
        const response = await api[this.props.mutation](variables)
        this.setState({
          loading: false,
          // data will have results prop only when requesting DRF ListViews,
          // otherwise it should just return the detail object
          data: response.data.results ? response.data.results : response.data,
        })
        return this.state.data
      } catch (error) {
        this.setState({
          loading: false,
          error,
        })
      }
    }
  }

  render() {
    return this.props.children(this.runMutation, this.state)
  }
}

export default Mutation
