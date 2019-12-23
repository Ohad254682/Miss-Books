

import NavBar from 'cmps/Navbar.jsx';
import Home from 'pages/Home.jsx';
import About from 'pages/About.jsx'
import BookApp from 'pages/BookApp.jsx';
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class App extends React.Component {

    render() {
        return (
            <main>
                <Router history={history}>
                    <NavBar></NavBar>
                    <Switch>
                        <Route component={Home} path="/" exact></Route>
                        <Route component={About} path="/about" exact></Route>
                        <Route component={BookApp} path="/books" exact></Route>
                    </Switch>
                </Router>
            </main>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)