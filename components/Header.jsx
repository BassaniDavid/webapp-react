// importo destrutturando NavLink da react-router-dom (dopo aver scaricato il pacchetto)
import { NavLink } from "react-router-dom"

const Header = () => {

    return (
        // semplice navbar con link per le varie pagine
        <div className="bg-dark">
            <nav className="container p-md-5 p-2 fs-3">
                <ul className="d-flex justify-content-between list-unstyled m-3">
                    <li className="btn btn-success p-md-3 px-md-5 p-sm-2 p-1">
                        <NavLink to='/' className="link-light">Home</NavLink>
                    </li>
                    <li className="btn btn-success p-md-3 px-md-5 p-sm-2 ">
                        <NavLink to='/movies' className="link-light">film</NavLink>
                    </li>
                    <li className="btn btn-success p-md-3 px-md-5 p-sm-2 ">
                        <NavLink to='/contacts' className="link-light">contatti</NavLink>
                    </li>
                    <li className="btn btn-success p-md-3 px-md-5 p-sm-2 ">
                        <NavLink to='/about' className="link-light">About us</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default Header;