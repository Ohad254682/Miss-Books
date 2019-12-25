export default class AddBook extends React.Component {
    state = {
        books: null
    }

    onChangeInput = (ev) => {
        field = ev.target.name;
        value = ev.target.value;
        this.setState()
    }

    render() {
        <input type="text" name="name" value={this.state.books} onChange={this.onChangeInput}></input>
    }
}