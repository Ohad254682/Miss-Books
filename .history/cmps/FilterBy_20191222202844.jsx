export default class BookFilter extends React.Component{
    state = {
        filterBy: {
            title: '',
        }
    }
    changeInput =(ev)=>{
        const field = ev.target.name;
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value ;
        this.setState(prevState=>({filterBy: {...prevState.filterBy , [field] : value}}))
        ///{filterBy:  {name:'' , numOfLegs:4 , name: 'e}}
    }

    onFilterClick = ()=>{
        this.props.onFilter(this.state.filterBy)
    }
    render() {
        return <div>
            <input type="text" placeholder="Title" value={this.state.filterBy.title}
                onChange={this.changeInput} name="name"></input>
            <input type="number" placeholder="num Of Legs" 
                value={this.state.filterBy.numOfLegs} name="numOfLegs"
                onChange={this.changeInput}></input>

            <button onClick={this.onFilterClick}>Filter</button>

        </div>
    }
}