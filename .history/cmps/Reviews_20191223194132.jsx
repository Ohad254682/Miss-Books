import NickNameForm from "./NickNameForm.jsx"

export default class NickNames extends React.Component {

    render() {
        return <div className="nick-names">
            <NickNameForm onSave={this.props.onAddNickname}></NickNameForm>
            <ul>
                {this.props.pet.nickNames.map(name => <li key={name}>{name}</li>)}
            </ul>
        </div>
    }
}