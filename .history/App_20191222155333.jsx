import Home from './pages/Home.jsx'
class App extends React.Component {

    state = {
        books: null
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks() {
        this.setState(books: getBooks());
    }
    render() {
        return (
            <main>
                <Home />
            </main>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)