


export default class BookPreview extends React.Component {

    state = {
        currency: null
    }

    componentDidMount() {
        this.onSetCurrency();
    }

    onSetCurrency = () => {
        switch (this.props.book.listPrice.currencyCode) {
            case 'ILS': this.setState({ currency: '₪' }); break;
            case 'USD': this.setState({ currency: '$' }); break;
            case 'EUR': this.setState({ currency: '€' }); break;
        }
    }

    onSelectBook = () => {
        this.props.onSelectBook(this.props.books);
    }
    render() {
        return <div>
            <img src={this.props.book.thumbnail} onClick={this.onSelectBook}></img>
            <li>Title : {this.props.book.title}</li>
            <li>Price : {this.props.book.listPrice.amount}{this.state.currency} </li>
        </div>
    }
}