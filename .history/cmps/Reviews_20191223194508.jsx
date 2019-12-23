

export default class Reviews extends React.Component {

    render() {
        return <div className="nick-names">
            <Reviews onSave={this.props.onAddReview}></Reviews>
            {/* <ul>
                {this.props.books.reviews.map((review,i) => <li key={i}>{review.name}{review</li>)}
            </ul> */}
        </div>
    }
}