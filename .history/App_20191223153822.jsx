
import BookApp from './pages/BookApp.jsx'
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
                  <Route component={PetsApp} path="/pets" exact></Route>
                  <Route component={PetAdd} path="/addPet" exact></Route>
                  <Route component={PetEdit} path="/pets/:id/edit" exact></Route>
                  <Route component={PetPage} path="/pets/:id" exact></Route>
                  <Route component={NotFound} path="/"></Route>
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