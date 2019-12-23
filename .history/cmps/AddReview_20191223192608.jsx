
export default class AddReview extends React.Component {

    state = {
        name: '',
        rate: '5',
        date: Date.now(),
        comment: ''




    }
    render() {
        <form>
            <input name="name" type="text" />
            <select name="rate" id="">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <input type="date" name="date"></input>
            <textarea name="comment"></textarea>
        </form>
    }
}

export default class NickNameForm extends React.Component {
    state = { name: '' }
    changeInput = (ev) => {
        this.setState({ name: ev.target.value })
    }
    onSave = (ev) => {
        ev.preventDefault()
        this.props.onSave(this.state.name);
    }
    render() {
        return <form>
            <input type="text" value={this.state.name} onChange={this.changeInput} />
            <button onClick={this.onSave}>Save</button>
        </form>
    }
}