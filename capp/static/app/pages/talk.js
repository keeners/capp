import React, { Component } from "react"
import { Heading } from "react-bulma-components/dist"
import TalkDetails from "@/components/Talk"

const Talk = props => (
  <div>
    <Heading>Talk ID: {props.match.params.id}</Heading>
    <TalkDetails id={props.match.params.id} />
  </div>
)

export default Talk
