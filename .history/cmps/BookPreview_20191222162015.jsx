


export default function BookPreview(props) {

    state = {
        currency: null
    }

    onSetCurrency = () => {
        switch (this.props.book.currencyCode) {
            case 'ILS': this.setState({ currency: '₪' }); break;
            case 'USD': this.setState({ currency: '$' }); break;
            case 'EUR': this.setState({ currency: '€' }); break;
        }
    }
    return <li>Title : {this.props.book.title}</li>
        <li>Price : {this.props.book.amount} </li>
}