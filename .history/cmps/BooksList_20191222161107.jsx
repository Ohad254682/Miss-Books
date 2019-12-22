import BookPreview from "BookPreview.jsx";


export default function BookList(props) {
    return <ul>{props.books.map((book , i)=><BookPreview key={i} book={book}></BookPreview>)}</ul>
}