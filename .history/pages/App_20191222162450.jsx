import {getBooks} from '../services/MissBooksService.jsx';
import BookList from './cmps/BookList.jsx';
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
                <BookList books={this.state.booksToShow}></BookList>
            </main>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)