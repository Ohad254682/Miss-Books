


export default function BookPreview(props) {

    state = {
        currency: null
    }

    onSetCurrency = () => {
        switch (this.props.book.currencyCode) {
            case 'ILS':
            case 'USD':
            case 'EUR':
        }
    }
    return <li>Title : {this.props.book.title}</li>
        <li>Price : {this.props.book.amount} </li>
}