import {useEffect, useState} from 'react';
import PropTypes from "prop-types";

const List = (props) => {
    const {onDetails} = props;
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
            .then(response => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="List">
           {isLoading ? <div>Loading...</div> : users.map(user => <div key={user.id} className="Person" id={user.id} onClick={() => onDetails(user)}>{user.name}</div>)}
        </div>
    );
};

List.propTypes = {
    onDetails: PropTypes.func.isRequired
}

export default List;
