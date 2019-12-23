


export default class BookPreview extends React.Component {

    state = {
        currency: null
    }

    componentDidMount() {
        this.setPriceCurrency();
    }

    setPriceCurrency = () => {
        switch (this.props.book.listPrice.currencyCode) {
            case 'ILS': this.setState({ currency: '₪' }); break;
            case 'USD': this.setState({ currency: '$' }); break;
            case 'EUR': this.setState({ currency: '€' }); break;
        }
    }   

    onSelectBook = () => {
        this.props.onSelectBook(this.props.book);
    }
    render() {
        return <Link to={`/books/${this.props.book.id}`}>
            <img src={this.props.book.thumbnail}></img>
            <li key="a">Title : {this.props.book.title}</li>
            <li key="b">Price : {this.props.book.listPrice.amount}{this.state.currency} </li>
        </Link>
    }
}