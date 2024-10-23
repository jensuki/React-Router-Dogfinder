import { NavLink } from 'react-router-dom';
import "./Nav.css";

function Nav({ dogs }) {
    return (
        <nav className="Nav">
            {dogs.map(dog => (
                <NavLink
                    className="NavLink-items"
                    key={dog.name}
                    to={`/dogs/${dog.name.toLowerCase()}`}
                >{dog.name}</NavLink>
            ))}
        </nav>
    )
}

export default Nav;