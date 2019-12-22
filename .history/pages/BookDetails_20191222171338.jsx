

export default class BookDetails extends React.Component {


    render() {
        return <div>
            <img src={this.props.book.thumbnail}></img>
            <li>Title : {this.props.book.title}</li>
            <li>Price : {this.props.book.listPrice.amount}{this.state.currency} </li>
        </div>
    }
}