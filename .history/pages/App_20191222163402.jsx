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
                <BooksList books={this.state.booksToShow}></BooksList>
            </main>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)