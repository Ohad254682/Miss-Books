const { NavLink } = ReactRouterDOM
export default function AppHeader(props) {
    return <nav>
        <ul>
            <li><NavLink activeClassName="active" to='/' exact>Home</NavLink></li>
            <li><NavLink activeClassName="active" to='/about' exact>About</NavLink></li>
            <li><NavLink activeClassName="active" to='/books'>Book Store</NavLink></li>
            <li><NavLink activeClassName="active" to='/addbook'>Book Store</NavLink></li>
        </ul>
    </nav>
}