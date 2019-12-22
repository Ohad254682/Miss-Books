export default class LongTxt extends React.Component {

    state = {
        expanderText: 'Show Less',
        isExpanded: false,
        descContent: ''
    }

    componentDidMount() {
        this.setHowLong();
        this.setHowOld();
        this.setIsCheap();
        this.isLongTxtShown();
    }


    onExpandChange = () => {
        this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }), this.changeExpanderText);
    }

    changeExpanderText = () => {
        if (!this.state.isExpanded)
            this.setState({
                expanderText: 'Show More',
            });
        else
            this.setState({ expanderText: 'Show Less' });
    }


    render() {
        return <li>description : {this.props.isLongTxtShown ? <button onClick={this.onExpandChange}>{this.state.expanderText}</button>
            : this.props.text}</li>
    }
}
