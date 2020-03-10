import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import PageA from '../pages/app/pageA'
import PageB from '../pages/app/pageB'
import NotFound from '../pages/app/404'

export default class CRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/app/pageA" component={PageA} />
                <Route exact path="/app/pageB" component={PageB} />
                <Route component={NotFound}></Route>
            </Switch>
        )
    }
}
