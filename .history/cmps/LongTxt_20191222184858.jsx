export default class LongTxt extends React.Component {

    state = {
        expanderText: null,
        isExpanded:false
    }

    onExpandChange=()=>{
        this.setState((prevState)=>({isExpanded : !prevState.isExpanded}))
    }


    render() {
        return <li>description : {this.props.isLongTxtShown ? <button>{this.state.expanderText}</button> : this.props.book.description}</li>
    }
}
