import React from 'react';
import Portal from './view/layout/portal/Portal';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

history.listen((location, action) => {
    window.scrollTo(0, 0)
})


function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/home"
                    render={() =>
                        <Redirect
                            to='/'
                        />
                    }
                />
                />
                <Route path="/" component={Portal} />
            </Switch>
        </Router>
    );
}

export default App;
