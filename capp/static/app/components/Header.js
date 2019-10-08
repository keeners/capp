import React, { Component } from "react"
import { Link } from "react-router-dom"
import logo from "@/assets/logo.svg"
import { Navbar } from "react-bulma-components/dist"

class Header extends Component {
  render() {
    return (
      <Navbar color="primary">
        <Navbar.Brand>
          <Navbar.Item renderAs="a" to="/" renderAs={Link}>
            <img src={logo} alt="logo" width="40" height="40" />
            Capp
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item to="/users" renderAs={Link}>
              Users
            </Navbar.Item>
            <Navbar.Item to="/talks" renderAs={Link}>
              Talks
            </Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item href="#">Login</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    )
  }
}
export default Header
