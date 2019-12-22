export default class BookFilter extends React.Component {
    state = {
        filterBy: {
            title: '',
        }
    }
    changeInput = (ev) => {
        const field = ev.target.name;
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }, this.onFilterBy))
    }

    onFilterBy = () => {
        this.props.onSetFilter(this.state.filterBy)
    }
    render() {
        return <div>
            <input type="text" placeholder="Title" value={this.state.filterBy.title}
                onChange={this.changeInput} name="title"></input>
        </div>
    }
}