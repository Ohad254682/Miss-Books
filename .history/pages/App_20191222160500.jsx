import {getBooks} from './services/MissBooksService.jsx'
class App extends React.Component {

    state = {
        booksToShow: null
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks=()=> {
        this.setState({booksToShow: getBooks()});
    }
    render() {
        return (
            <main>
                <BookList books={booksToShow}></BookList>
            </main>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)