import BookPreview from "BookPreview.jsx";


export function BooksList(props) {
    return <ul>{props.books.map((book , i)=><BookPreview key={i} book={book}></BookPreview>)}</ul>
}