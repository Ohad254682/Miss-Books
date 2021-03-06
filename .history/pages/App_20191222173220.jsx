import { getBooks } from '../services/MissBooksService.jsx';
import { BooksList } from '../cmps/BooksList.jsx';
import BookDetails from '../cmps/BookDetails.jsx';
class App extends React.Component {

    state = {
        booksToShow: [],
        selectedBook: null,
        currency: null
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        this.setState({ booksToShow: getBooks() });
    }

    onSelectBook = (book) => {
        this.setState({ selectedBook: book })
    }

    onSetCurrency = (currency) => {
        this.setState({ currency: currency });
    }

    render() {
        return (
            <main>
                {this.state.selectedBook ?
                    <BookDetails book={this.state.selectedBook} onSetCurrency={this.onSetCurrency}></BookDetails >
                    :
                    <BooksList books={this.state.booksToShow} onSelectBook={this.onSelectBook}></BooksList>
                }
            </main>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)