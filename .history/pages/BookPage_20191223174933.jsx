import BookService from '../services/MissBooksService.jsx'
import BookDetails from '../cmps/BookDetails.jsx';

export default class BookPage extends React.Component {

    state = {
        book: {}
    }
    componentDidMount() {
        this.loadBook();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadPet();
        }
    }

    loadBook() {
        const { id } = this.props.match.params;
        BookService.getBookById(id).then(book => {
            this.setState({ book: book })
        })
    }

    goBack = () => {
        this.props.history.push('/books')
    }

    render() {
        return <div>
            <BookDetails book={this.state.book}></BookDetails>
            <button onClick={this.goBack}>Back</button>
        </div>
    }
}