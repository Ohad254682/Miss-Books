import petsService from '../services/petsServices.js'
import BookDetails from '../cmps/pets/PetDetails.jsx';

export default class PetPage extends React.Component {

    state = {
        book: null
    }
    componentDidMount() {
        this.loadPet();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadPet();
        }
    }

    loadPet() {
        const { id } = this.props.match.params;
        petsService.getPetById(id).then(pet => {
            this.setState({ pet })
        })
    }

    goBack = () => {
        this.props.history.push('/books')
    }

    render() {
        return <BookDetails book={this.state.book} onAddNickname={this.onAddNickname}></BookDetails>
    }
}