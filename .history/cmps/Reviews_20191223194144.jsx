import NickNameForm from "./NickNameForm.jsx"

export default class Reviews extends React.Component {

    render() {
        return <div className="nick-names">
            <Reviews onSave={this.props.onAddNickname}></Reviews>
            <ul>
                {this.props.pet.nickNames.map(name => <li key={name}>{name}</li>)}
            </ul>
        </div>
    }
}