import {useState, useEffect} from 'react';
import "./Affirmations.css"

function Affirmations() 
{
    const [affirmation, setAffirmation] = useState(null);

    const fetchAffirmation = () => {
        fetch(`https://www.affirmations.dev/`)
        .then(res => {
            if (!res.ok) 
            {
                throw new Error('affirmation not found');
            }
            return res.json();
        })
        .then(data => {
            console.log("data pulled")
            setAffirmation({
                text: data.affirmation
            });
        })
        .catch(err => {
            setAffirmation(null)
        })
    }


    return (
        <div id="affirmation-div">
            {!affirmation ? (
                <p id="no-affirmation-text">Resting for the Night</p>
            ) : (
                <p id="affirmation-text">{affirmation}</p>
            )
            }
            <button onClick={fetchAffirmation}>Request Words of Affirmation</button>
        </div>
    );
}

export default Affirmations