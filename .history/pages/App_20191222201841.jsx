import { getBooks } from '../services/MissBooksService.jsx';
import { BooksList } from '../cmps/BooksList.jsx';
import BookDetails from '../cmps/BookDetails.jsx';
class App extends React.Component {

    state = {
        booksToShow: [],
        selectedBook: null,
        currency: null,
        filterBy:null
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        this.setState({ booksToShow: getBooks(this.state.filterBy) });
    }

    onSelectBook = (book) => {
        this.setState({ selectedBook: book })
    }

    onSetCurrency = (currency) => {
        this.setState({ currency: currency });
    }

    returnToMenu = () => {
        this.setState({
            selectedBook: null,
            currency: null
        })
    }

    onSetFilter = (filterBy) =>{
        this.setState({filterBy:filterBy} , this.loadBooks);
    }

    render() {
        return (
            <main>
                {this.state.selectedBook ? [<BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />,
                <BookDetails book={this.state.selectedBook} currency={this.state.currency} returnToMenu={this.returnToMenu} ></BookDetails >]
                    :
                    <BooksList books={this.state.booksToShow} onSelectBook={this.onSelectBook} onSetCurrency={this.onSetCurrency}></BooksList>
                }
            </main>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)