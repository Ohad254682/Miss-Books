import BusService from '../services/eventBusService.jsx';
export default class UserMsg extends React.Component {
    state = {
        msg: null
    }
    componentDidMount() {
        BusService.on('usermsg', (msg) => {
            this.setState({ msg: msg.detail });
        })
    }


    render() {
        // return <div></div>
        return this.state.msg && <a href={`/#/books/${this.state.msg.bookId}`}>{this.state.msg.bookTitle}</a>
    }
}