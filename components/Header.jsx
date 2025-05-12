import { NavLink } from "react-router-dom"

const Header = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/movies'>film</NavLink>
                </li>
                <li>
                    <NavLink to='/contacts'>contatti</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About us</NavLink>
                </li>
            </ul>
        </nav>
    )

}

export default Header;