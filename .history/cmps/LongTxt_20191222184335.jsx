export default class LongTxt extends React.Component {

    render() {
        return <li>description : {this.props.isLongTxtShown? <button>{this.state.exPanderText}</button> :this.props.book.description}</li>
    }
}
