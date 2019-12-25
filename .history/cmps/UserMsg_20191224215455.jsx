import BusService from '../services/eventBusService.jsx';
export default class UserMsg extends React.Component {
    state = {

    }

    BusService.on('changePage', (pageUrl) => {
        history.push(pageUrl);
    })

    render() {
        return this.props.active && <a href="/#/book/${book.id}">Check it Out</a>
    }
}
}