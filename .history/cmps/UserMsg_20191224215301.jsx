export default class UserMsg extends React.Component {
    state = {

    }

    render() {
        return this.props.active && <a href="/#/book/${book.id}">Check it Out</a>
    }
}
}