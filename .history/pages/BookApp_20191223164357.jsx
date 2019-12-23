import BookService from '../services/MissBooksService.jsx'
import { BooksList } from '../cmps/BooksList.jsx';
import BookDetails from '../cmps/BookDetails.jsx';
import BookFilter from '../cmps/FilterBy.jsx'
export default class BookApp extends React.Component {

    state = {
        booksToShow: [],
        selectedBook: null,
        filterBy: null
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        this.setState({ booksToShow: BookService.getBooks(this.state.filterBy) });
    }

    onSelectBook = (book) => {
        this.setState({ selectedBook: book })
    }


    returnToMenu = () => {
        this.setState({
            selectedBook: null,
            currency: null
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy: filterBy }, this.loadBooks);
    }

    render() {
        return (
            <main>
                {this.state.selectedBook ?
                    <BookDetails book={this.state.selectedBook} returnToMenu={this.returnToMenu} ></BookDetails >
                    :
                    [<BookFilter onSetFilter={this.onSetFilter}></BookFilter>,
                    <BooksList books={this.state.booksToShow} onSelectBook={this.onSelectBook}></BooksList>]
                }
            </main>
        )
    }
}

