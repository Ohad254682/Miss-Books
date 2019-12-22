export default class LongTxt extends React.Component {

    state = {
        expanderText: null
    }
    render() {
        return <li>description : {this.props.isLongTxtShown ? <button>{this.state.expanderText}</button> : this.props.book.description}</li>
    }
}
