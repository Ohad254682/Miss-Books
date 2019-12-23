
export default class FormReview extends React.Component {

    state = {
        name: 'Books Reader',
        rate: '5',
        date: Date.now(),
        comment: ''
    }

    onChangeInput = (ev) => {
        var value = ev.target.value;
        var field = ev.target.name;
        this.setState({ [field]: value })
    }

    onSave = (ev) => {
        ev.preventDefault()
        this.props.onSave(this.state.name, this.state.rate, this.state.date, this.state.comment);
    }

    render() {
        return <form className="add-review-form">
            <input name="name" type="text" onChange={this.onChangeInput} value={this.state.name} />
            <select name="rate" onChange={this.onChangeInput} value={this.state.rate}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <input type="date" name="date" onChange={this.onChangeInput} value={this.state.date}></input>
            <textarea name="comment" onChange={this.onChangeInput} value={this.state.comment}></textarea>
            <button onClick={this.onSave}>Save</button>
        </form>
    }
}
