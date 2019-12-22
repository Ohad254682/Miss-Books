import { getBooks } from '../services/MissBooksService.jsx';
import { BooksList } from '../cmps/BooksList.jsx';
class App extends React.Component {

    state = {
        booksToShow: [],
        selectedBook: null
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        this.setState({ booksToShow: getBooks() });
    }

    onSelectBook=(book)=>{
        this.setState({selectedBook:book})
    }
    render() {
        return (
            <main>
                <BooksList books={this.state.booksToShow} onSelectBook={this.onSelectBook}></BooksList>
            </main>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)