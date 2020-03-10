
import React, { Component } from 'react'; import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import Login from '../Login/Login'
import LayOut from './LayOut'
class Page extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/login" />}></Route>
                    <Route path="/login" component={Login} />
                    <Route path="/app" component={LayOut}></Route>
                </Switch>
            </Router>
        )
    }
}
export default Page 