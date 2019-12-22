import BookPreview from "BookPreview.jsx";


export function BooksList(props) {
    return <ul className="book-list">{props.books.map((book , i)=><BookPreview key={i} book={book} onSelectBook={this.props.onSelectBook}></BookPreview>)}</ul>
}