import BookService from '../services/MissBooksService.jsx'
export default class AddBook extends React.Component {
    state = {
        name: '',
        resultsBooks: []
    }

    componentDidMount() {
        this.setState({ name: '', resultsBooks: [] })
    }

    onChangeInput = (ev) => {
        var field = ev.target.name;
        var value = ev.target.value;
        this.setState({ [field]: value },
            this.setState(function (prevState) {
                return { resultsBooks: BookService.getListOfGoogleBooks(prevState[field]) };
            }))
    }

    render() {
        return <div><input type="text" name="name" value={this.state.books} onChange={this.onChangeInput}></input>
            {this.state.resultsBooks && this.state.resultsBooks.map(book => <li>{book.volumeInfo.title}</li>)}
        </div>
    }
}