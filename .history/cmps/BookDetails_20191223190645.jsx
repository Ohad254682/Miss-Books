import LongTxt from 'LongTxt.jsx'

export default class BookDetails extends React.Component {

    state = {
        isLongTxtShown: null
    }

    componentDidMount() {
        this.isLongTxtShown()
    }

    isLongTxtShown = () => {
        if (this.props.book.description.length > 100)
            this.state.isLongTxtShown = true;
        else
            this.state.isLongTxtShown = false;
    }

    setHowLong = () => {
        if (this.props.book.pageCount > 500)
            return 'Long reading';
        else
            if (this.props.book.pageCount > 200)
                return 'Decent Reading';
        if (this.props.book.pageCount < 100)
            return 'Light Reading';
    }

    setHowOld = () => {
        var currYear = new Date().getFullYear();
        if (currYear - this.props.book.publishedDate > 10)
            return 'Veteran Book';
        else
            if (currYear - this.props.book.publishedDate < 1)
                return 'New!';
    }

    setIsCheap = () => {
        if (this.props.book.listPrice.amount > 150)
            return 'red';
        else if (this.props.book.listPrice.amount < 20)
            return 'green';

    }


    render() {
        return <div className="selected-book-page">
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
                <li key="10" className={this.setIsCheap()}>Price : {this.props.book.listPrice.amount}{this.props.currency} </li>
                <li key="11">{this.setHowLong()}</li>
                <li key="12">{this.setHowOld()}</li>
                {this.props.book.listPrice.isOnSale ? <li key="13" className="on-sale">On Sale</li> : <li key="14"></li>}
            </ul>
            <button onClick={this.props.goBack}>Go Back</button>
        </div>
    }
}
