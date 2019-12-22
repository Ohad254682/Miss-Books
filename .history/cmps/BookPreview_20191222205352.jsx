


export default class BookPreview extends React.Component {

    state = {
        currency: null
    }

    componentDidMount() {
        this.onSetCurrency();
    }

    onSetCurrency = () => {
        switch (this.props.book.listPrice.currencyCode) {
            case 'ILS': this.setState({ currency: '₪' }, this.onSetCurrency); break;
            case 'USD': this.setState({ currency: '$' }, this.onSetCurrency); break;
            case 'EUR': this.setState({ currency: '€' }, this.onSetCurrency); break;
        }
    }

    onSetCurrency = () => {
        this.props.onSetCurrency(this.state.currency);
    }

    onSelectBook = () => {
        this.props.onSelectBook(this.props.book);
    }
    render() {
        return <div>
            <img src={this.props.book.thumbnail} onClick={this.onSelectBook}></img>
            <li key="a">Title : {this.props.book.title}</li>
            <li key="b">Price : {this.props.book.listPrice.amount}{this.state.currency} </li>
        </div>
    }
}