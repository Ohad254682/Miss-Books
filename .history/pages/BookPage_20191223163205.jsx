import petsService from '../services/petsServices.js'
import PetDetails from '../cmps/pets/PetDetails.jsx';

export default class PetPage extends React.Component {

    state = {
        pet: null
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
        console.log(this.props)
        const { id } = this.props.match.params;
        petsService.getPetById(id).then(pet => {
            this.setState({ pet })
        })
    }

    goBack = () => {
        this.props.history.push('/pets')
        // this.props.history.goBack()
    }

    onDelete = (pet) => {
        petsService.deletePet(pet).then(() => {
            this.props.history.push('/pets')
        });
    }

    onAddNickname = (name) => {
        petsService.addNickname(this.state.pet.id, name).then(pet => {
            this.setState({ pet })
        })
    }


    render() {
        return <BookDetails pet={this.state.pet} onAddNickname={this.onAddNickname} goBack={this.goBack}></BookDetails>
    }
}