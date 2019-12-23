

const { Link } = ReactRouterDOM
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

    render() {
        return <Link to={`/books/${this.props.book.id}`}>
            <img src={this.props.book.thumbnail}></img>
            <li key="a">Title : {this.props.book.title}</li>
            <li key="b">Price : {this.props.book.listPrice.amount}{this.state.currency} </li>
        </Link>
    }


    render() {
        // const props = this.props;
        const { props } = this;
        return <Link to={`/pets/${props.pet.id}`}>
            <li onClick={this.onSelectPet}>
                <h2>{props.pet.name}</h2>
                <img src={props.pet.imgUrl} height="300" />
            </li>
        </Link>
    }
}
}