import { Navigate, useParams, Link } from 'react-router-dom';
import './DogDetails.css';

function DogDetails({ dogs }) {
    const { name } = useParams(); // fetch dogs name from the url end
    const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase()); // compare name from URL to dog.name

    if (!dog) return <Navigate to="/dogs" />

    return (
        <div className="DogDetails">
            <h1>{dog.name}</h1>
            <img src={dog.src} alt={dog.name} style={{ width: "300px" }} />
            <h3>Age: {dog.age}</h3>
            <ul className="DogDetails-facts">
                {dog.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>
            <Link to="/dogs">Go back</Link>
        </div>


    )
}
export default DogDetails;