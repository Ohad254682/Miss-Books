import BookService from '../services/MissBooksService.jsx'
import BookDetails from '../cmps/BookDetails.jsx';

export default class BookPage extends React.Component {

    state = {
        book: null
    }
    componentDidMount() {
        this.loadBook();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadBook();
        }
    }

    loadBook() {
        const { id } = this.props.match.params;
        BookService.getBookById(id).then(book => {
            console.log(book);
            this.setState({ book })
        })
    }

    goBack = () => {
        this.props.history.push('/books')
    }

    render() {
        if (!this.state.book) return <div>Loading...</div>
        return <div>
            <BookDetails book={this.state.book}></BookDetails>
            <button onClick={this.goBack}>Back</button>
        </div>
    }
}