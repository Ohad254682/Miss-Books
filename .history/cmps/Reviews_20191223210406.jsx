

import FormReview from 'FormReview.jsx'
export default class Reviews extends React.Component {

    render() {
        return <div className="nick-names">
            <FormReview onSave={this.props.onAddReview}></FormReview>
            <ul>
                {this.props.book.reviews && this.props.book.reviews.map((review, i) => <ul key={i}>
                    <li>{review.name}</li>
                    <li>{review.rate}</li>
                    <li>{review.date}</li>
                    <li>{review.comment}</li>
                    <button onClick={this.onCLickDeleteReview}>X</button>
                </ul>)}
            </ul>
        </div>
    }
}