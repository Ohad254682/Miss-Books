const { NavLink } = ReactRouterDOM
export default function NavBar(props) {
    return <nav>
        <ul>
            <li><NavLink activeClassName="active" to='/' exact>Home</NavLink></li>
            <li><NavLink activeClassName="active" to='/pets'>Pets</NavLink></li>
            <li><NavLink activeClassName="active" to='/addPet'>New Pet</NavLink></li>
        </ul>
    </nav>
}