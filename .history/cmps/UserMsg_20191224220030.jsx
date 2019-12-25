import BusService from '../services/eventBusService.jsx';
export default class UserMsg extends React.Component {
    state = {
        msg: undefined
    }
    componentDidMount() {
        BusService.on('usermsg', (msg) => {
            this.setState({ msg });
        })
    }


    render() {
        return this.state.msg && <a href={`/#/books/${this.state.msg.bookId}`}>{this.state.msg.bookTitle}</a>
    }
}