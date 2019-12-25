export default class AddBook extends React.Component {
    state = {
        name: null,
        resultsBooks: null
    }

    onChangeInput = (ev) => {
        var field = ev.target.name;
        var value = ev.target.value;
        this.setState({ [field]: value }, getListOfGoogleBooks(this.state[field]));

    }

    render() {
        return <input type="text" name="name" value={this.state.books} onChange={this.onChangeInput}></input>
    }
}