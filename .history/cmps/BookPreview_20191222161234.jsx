


export default function BookPreview(props) {
    return <ul>{props.books.map((book , i)=><BookPreview key={i} book={book}></BookPreview>)}</ul>
}