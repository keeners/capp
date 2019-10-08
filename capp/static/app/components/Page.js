import React, { Component } from "react"
import styled, { ThemeProvider, injectGlobal } from "styled-components"
import "react-bulma-components/dist/react-bulma-components.min.css"
import { Section, Container } from "react-bulma-components/dist"

import Header from "@/components/Header"
import Meta from "@/components/Meta"
import GlobalStyle from "@/components/styles/GlobalStyle"

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
}

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Meta />
        <GlobalStyle />
        <Header />
        <Section>
          <Container>{this.props.children}</Container>
        </Section>
      </ThemeProvider>
    )
  }
}

export default Page
