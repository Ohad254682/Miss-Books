export default class LongTxt extends React.Component {

    state = {
        expanderText: null,
        isExpanded: false
    }

    onExpandChange = () => {
        this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }), changeExpandBtnText)
    }

    changeExpandBtnText = () => {
        if (!this.state.expanderText)
            this.setState({ expanderText: 'Show More' });
        else
            this.setState({ expanderText: 'Show Less' });
    }


    render() {
        return <li>description : {this.props.isLongTxtShown ? <button onClick={this.onExpandChange}>{this.state.expanderText}</button>
            : this.props.book.description}</li>
    }
}
