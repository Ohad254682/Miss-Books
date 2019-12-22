export default class LongTxt extends React.Component {

    state = {
        expanderText: null,
        isExpanded: false,
        descContent: null
    }

    componentDidMount() {
        this.changeExpanderText();
    }


    onExpandChange = () => {
        this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }), this.changeExpanderText);
    }

    changeExpanderText = () => {
        if (!this.state.isExpanded)
            this.setState({
                expanderText: 'Show More',
                descContent: this.props.text.slice(0, 100)
            });
        else
            this.setState({
                expanderText: 'Show Less',
                descContent: this.props.text.slice(0, this.props.text.length)
            });
    }


    render() {
        return <li>description : {this.props.isLongTxtShown ? <button onClick={this.onExpandChange}>{this.state.expanderText}</button>
            : this.props.text}</li>
    }
}
