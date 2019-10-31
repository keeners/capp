import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

import Page from "@/components/Page"
import NotFound from "./404"
import Index from "./index"
import Users from "./users"
import User from "./user"
import CreateUser from "./create-user"
import UpdateUser from "./update-user"
import Talks from "./talks"
import Talk from "./talk"

class App extends Component {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Page>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/users/" component={Users} />
          <Route exact path="/users/create/" component={CreateUser} />
          <Route path="/users/:id/" component={User} />
          <Route path="/users/:id/update/" component={UpdateUser} />
          <Route exact path="/talks/" component={Talks} />
          <Route path="/talks/:id" component={Talk} />
          <Route component={NotFound} />
        </Switch>
      </Page>
    )
  }
}

export default App
