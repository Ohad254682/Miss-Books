


export default class BookPreview extends React.Component {

    state = {
        currency: null
    }

    onSetCurrency = () => {
        switch (this.props.book.listPrice.currencyCode) {
            case 'ILS': this.setState({ currency: '₪' }); break;
            case 'USD': this.setState({ currency: '$' }); break;
            case 'EUR': this.setState({ currency: '€' }); break;
        }
    }

    render() {
        return <div>
            <li>Title : {this.props.book.title}</li>
            <li>Price : {this.props.book.listPrice.amount}{this.state.currency} </li>
        </div>
    }
}