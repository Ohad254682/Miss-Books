

import FormReview from 'FormReview.jsx'
export default class Reviews extends React.Component {

    render() {
        return <div className="nick-names">
            <FormReview onSave={this.props.onAddReview}></FormReview>
            {/* <ul>
                {this.props.books.reviews.map((review,i) => <li key={i}>{review.name}{review</li>)}
            </ul> */}
        </div>
    }
}