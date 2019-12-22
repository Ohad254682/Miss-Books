import BookPreview from "BookPreview.jsx";


export default function BookList(props) {
    return <ul>{props.pets.map((pet , i)=><BookPreview key={i} pet={pet} onSelectPet={props.onSelectPet}></BookPreview>)}</ul>
}