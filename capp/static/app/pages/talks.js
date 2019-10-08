import React, { Component } from "react"
import { Heading } from "react-bulma-components/dist"
import TalksList from "@/components/Talks"

const Talks = props => (
  <div>
    <Heading>Talks</Heading>
    <TalksList />
  </div>
)

export default Talks
