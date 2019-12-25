export default class AddBook extends React.Component {
    state = {
        name: null
    }

    onChangeInput = (ev) => {
        field = ev.target.name;
        value = ev.target.value;
        this.setState({ [field]: value });
    }

    render() {
       return <input type="text" name="name" value={this.state.books} onChange={this.onChangeInput}></input>
    }
}