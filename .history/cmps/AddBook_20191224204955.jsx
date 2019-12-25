import BookService from '../services/MissBooksService.jsx'
export default class AddBook extends React.Component {
    state = {
        name: '',
        resultsBooks: []
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
        BookService.AddBook(book);
        
    }


    render() {
        console.log(this.state.resultsBooks)
        return <div>
            <input type="text" name="name" value={this.state.books} onChange={this.onChangeInput}></input>
            {this.state.resultsBooks
                &&
                this.state.resultsBooks.map(book => <li>{book.volumeInfo.title}<button onClick={this.onAddBook.bind(this,book)}>+</button></li>)}
        </div>
    }
}