

export default class Reviews extends React.Component {

    render() {
        return <div className="nick-names">
            <Reviews onSave={this.props.onAddReview}></Reviews>
            <ul>
                {this.props.book.nickNames.map(name => <li key={name}>{name}</li>)}
            </ul>
        </div>
    }
}