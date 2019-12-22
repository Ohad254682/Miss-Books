import {getBooks} from './services/MissBooksService.jsx'
class App extends React.Component {

    state = {
        books: null
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks=()=> {
        this.setState({books: getBooks()});
    }
    render() {
        return (
            <main>
                <BookList onSelectBook={this.onSelectBook} books={booksToShow}></BookList>
            </main>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)