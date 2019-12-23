import BookService from '../services/MissBooksService.js'
import BookDetails from '../cmps/BookDetails.jsx';

export default class PetPage extends React.Component {

    state = {
        book: null
    }
    componentDidMount() {
        this.loadPet();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadPet();
        }
    }

    loadPet() {
        const { id } = this.props.match.params;
        BookService.getBookById(id).then(book => {
            this.setState({ book: book })
        })
    }

    goBack = () => {
        this.props.history.push('/books')
    }

    render() {
        return <BookDetails book={this.state.book} onAddNickname={this.onAddNickname}></BookDetails>
    }
}