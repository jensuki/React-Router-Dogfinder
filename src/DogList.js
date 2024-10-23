import { Link } from 'react-router-dom';
import './DogList.css';

function DogList({ dogs }) {
    return (
        <div className="DogList">
            <h1>Our pups!</h1>
            <ul>
                {dogs.map(dog => (
                    <li key={dog.name}>
                        <Link to={`/dogs/${dog.name.toLowerCase()}`}>
                            <h3>{dog.name}</h3>
                            <img src={dog.src} alt={dog.name} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DogList;