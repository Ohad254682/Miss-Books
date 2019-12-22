

export default class BookDetails extends React.Component {


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
                <li>Price : {this.props.book.listPrice.amount}{this.state.currency} </li>
                {this.props.book.listPrice.isOnSale ? <li>On Sale</li> : <li></li>}
            </div>
        </div>
    }
}

"id": "OXeMG8wNskc",
    "title": "metus hendrerit",
        "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
            "authors": [
                "Barbara Cartland"
            ],
                "publishedDate": 1999,
                    "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
                        "pageCount": 713,
                            "categories": [
                                "Computers",
                                "Hack"
                            ],
                                "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
                                    "language": "en",
                                        "listPrice": {
    "amount": 109,
        "currencyCode": "EUR",
            "isOnSale": false
}