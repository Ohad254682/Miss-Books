import BookService from '../services/MissBooksService.jsx';
import BusService from '../services/eventBusService.jsx';
export default class AddBook extends React.Component {
    state = {
        name: '',
        resultsBooks: [],
        purchase:false
    }

    onChangeInput = (ev) => {
        var field = ev.target.name;
        var value = ev.target.value;
        BookService.getListOfGoogleBooks(value)
            .then((books) => {
                this.setState({ [field]: value, resultsBooks: books })
            })
    }

    onAddBook(book) {
        BookService.addBook(book);
        BusService.emit('changePage',`/books/${book.id}`)
    }


    render() {
        console.log(this.state.resultsBooks)
        return <div>
            <input type="text" name="name" value={this.state.books} onChange={this.onChangeInput}></input>
            {this.state.resultsBooks
                &&
                this.state.resultsBooks.map(book => <li>{book.volumeInfo.title}<button onClick={this.onAddBook.bind(this, book)}>+</button></li>)}
                {this.state.purchase&&<a href="/#/book/${book.id}">Check it Out</a>}
        </div>
    }
}