export default class AddBook extends React.Component {
    state = {
        name: null,
        resultsBooks: null
    }

    onChangeInput = (ev) => {
        var field = ev.target.name;
        var value = ev.target.value;
        this.setState({ [field]: value }, this.setState({ resultsBooks: getListOfGoogleBooks(this.state[field]) }));

    }

    render() {
        return <div><input type="text" name="name" value={this.state.books} onChange={this.onChangeInput}></input>
            {this.state.resultsBooks && this.state.resultsBooks.map(book => <li>{book.volumeInfo.title}</li>)}
        </div>
    }
}