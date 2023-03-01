import {useEffect, useState} from 'react';
import PropTypes from "prop-types";

const Details = (props) => {
    const {info} = props;
    const [details, setDetails] = useState(null);
    const [isLoading,setLoading] = useState(false);

    useEffect( ()=> {
        if (info) {
            setLoading(true);
            fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
                .then(response => response.json())
                .then(data => {
                    setDetails(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                });
        }
    }, [info]);

    return (
        <div className="PersonDetails">
            {isLoading ? <div className="Loading">Loading...</div> : null}
            {details ?
                <>
                    <img className="PersonPhoto" src={details.avatar} alt='avatar' />
                    <div className="PersonName">{details.name}</div>
                    <div className="PersonCity Det">City: {details.details.city}</div>
                    <div className="PersonCompany Det">Company: {details.details.company}</div>
                    <div className="PersonPosition Det">Position: {details.details.position}</div>
                </>
            : null }
        </div>
    );
};

Details.propTypes = {
    info: PropTypes.object
}

export default Details;