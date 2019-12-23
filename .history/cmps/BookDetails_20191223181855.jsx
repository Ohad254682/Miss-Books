import LongTxt from 'LongTxt.jsx'

export default class BookDetails extends React.Component {

    state = {
        howLong: null,
        howOld: null,
        isCheap: null,
        isLongTxtShown: null
    }

    componentDidMount() {
        this.setHowLong();
        this.setHowOld();
        this.setIsCheap();
        this.isLongTxtShown();
    }

    isLongTxtShown = () => {
        if (this.props.book.description.length > 100)
            this.state.isLongTxtShown = true;
        else
            this.state.isLongTxtShown = false;
    }

    setHowLong = () => {
        if (this.props.book.pageCount > 500)
            this.setState({ howLong: 'Long reading' });
        else
            if (this.props.book.pageCount > 200)
                this.setState({ howLong: 'Decent Reading' });
        if (this.props.book.pageCount < 100)
            this.setState({ howLong: 'Light Reading' });
    }

    setHowOld = () => {
        var currYear = new Date().getFullYear();
        if (currYear - this.props.book.publishedDate > 10)
            this.setState({ howOld: 'Veteran Book' });
        else
            if (currYear - this.props.book.publishedDate < 1)
                this.setState({ howOld: 'New!' });
    }

    setIsCheap = () => {
        if (this.props.book.listPrice.amount > 150)
            this.setState({ isCheap: 'red' });
        else if (this.props.book.listPrice.amount < 20)
            this.setState({ isCheap: 'green' });

    }


    render() {
        return !this.props.book ? <div className="selected-book-page">
            <img src={this.props.book.thumbnail}></img>
            <ul className="book-details">
                <li key="1">Id : {this.props.book.id}</li>
                <li key="2">Title : {this.props.book.title}</li>
                <li key="3">subtitle : {this.props.book.subtitle}</li>
                <li key="4">authors : {this.props.book.authors.map((author) => <li>{author}</li>)}</li>
                <li key="5">publishedDate : {this.props.book.publishedDate}</li>
                <LongTxt key="6" text={this.props.book.description} isLongTxtShown={this.state.isLongTxtShown} />
                <li key="7">pageCount : {this.props.book.pageCount}</li>
                <li key="8">categories :{this.props.book.categories.map((category) => <li>{category}</li>)}</li>
                <li key="9">language : {this.props.book.language}</li>
                <li key="10" className={this.state.isCheap}>Price : {this.props.book.listPrice.amount}{this.props.currency} </li>
                <li key="11">{this.state.howLong}</li>
                <li key="12">{this.state.howOld}</li>
                {this.props.book.listPrice.isOnSale ? <li key="13" className="on-sale">On Sale</li> : <li key="14"></li>}
            </ul>
            <button onClick={this.props.returnToMenu}>Go Back</button>
        </div> : <div></div>
    }
}
