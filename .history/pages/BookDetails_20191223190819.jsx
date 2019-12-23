import BookService from '../services/MissBooksService.jsx'
import BookDetails from '../cmps/BookDetails.jsx';

export default class BookPage extends React.Component {

    state = {
        book: null
    }
    co