

export default class BookDetails extends React.Component {

    state = {
        howLong: null,
        howOld: null,
        isCheap: null,
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


    render() {
        return <div>
            <img src={this.props.book.thumbnail}></img>
            <div>
                <li>Id : {this.props.book.id}</li>
                <li>Title : {this.props.book.title}</li>
                <li>subtitle : {this.props.book.subtitle}</li>
                <li>authors : {this.props.book.authors.map((author) => <li>{author}</li>)}</li>
                <li>publishedDate : {this.props.book.publishedDate}</li>
                <li>description : {this.props.book.description}</li>
                <li>pageCount : {this.props.book.pageCount}</li>
                <li>categories :{this.props.book.categories.map((category) => <li>{category}</li>)}</li>
                <li>language : {this.props.book.language}</li>
                <li className="isCheap">Price : {this.props.book.listPrice.amount}{this.props.currency} </li>
                <li>{this.state.howLong}</li>
                <li>{this.state.howOld}</li>
                {this.props.book.listPrice.isOnSale ? <li className="on-sale">On Sale</li> : <li></li>}
            </div>
            <button onClick={this.props.returnToMenu}>Go Back</button>
        </div>
    }
}
