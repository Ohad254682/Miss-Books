export default class LongTxt extends React.Component {

    state = {
        expanderText: 'Show Less',
        isExpanded: false,
        descContent
    }

    onExpandChange = () => {
        this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }), this.changeExpandBtnText);
    }

    changeExpandBtnText = () => {
        if (!this.state.isExpanded)
            this.setState({ expanderText: 'Show More' });
        else
            this.setState({ expanderText: 'Show Less' });
    }

    setDescContent=()=>{

    }


    render() {
        return <li>description : {this.props.isLongTxtShown ? <button onClick={this.onExpandChange}>{this.state.expanderText}</button>
            : this.props.text}</li>
    }
}
