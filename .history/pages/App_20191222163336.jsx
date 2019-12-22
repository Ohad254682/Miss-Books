import {getBooks} from '../services/MissBooksService.jsx';
import {BooksList} from '../cmps/BooksList.jsx';
class App extends React.Component {

    state = {
        booksToShow: []
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
                <BookList books={this.state.booksToShow}></BookList>
            </main>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)