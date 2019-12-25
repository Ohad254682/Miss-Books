

import AddBookPage from 'pages/AddBookPage.jsx'
import BookPage from 'pages/BookPage.jsx';
import AppHeader from 'cmps/AppHeader.jsx';
import Home from 'pages/Home.jsx';
import About from 'pages/About.jsx'
import BookApp from 'pages/BookApp.jsx';
import BusService from 'services/eventBusService.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class App extends React.Component {

    render() {
        return (
            <main>
                <Router history={history}>
                    <AppHeader></AppHeader>
                    <Switch>
                        <Route component={Home} path="/" exact></Route>
                        <Route component={About} path="/about" exact></Route>
                        <Route component={BookApp} path="/books" exact></Route>
                        <Route component={BookPage} path="/books/:id" exact></Route>
                        <Route component={AddBookPage} path="/addbook" exact></Route>
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