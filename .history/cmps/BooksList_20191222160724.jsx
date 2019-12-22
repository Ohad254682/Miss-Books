import BookPreview from "./BookPreview.jsx";


export default function BookList(props) {
    return <ul>{props.pets.map((pet , i)=><PetPreview key={i} pet={pet} onSelectPet={props.onSelectPet}></PetPreview>)}</ul>
}