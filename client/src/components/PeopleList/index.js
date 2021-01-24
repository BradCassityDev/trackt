import React, { useEffect } from 'react';
import Auth from '../../utils/auth';
import { QUERY_USERS } from '../../utils/queries'
import PeopleCard from '../PeopleCard';
import { useQuery, useMutation } from '@apollo/react-hooks';

const PeopleList = ({ people }) => {
    // Query Goals
    const { loading, data } = useQuery(QUERY_USERS);
    
    useEffect(() => {
        
    }, [data] );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="content-wrapper">
            <h4>Site Members</h4>
            <hr></hr>
            <div className="row">
                {data.users.map(person => (
                    <div className="col-12 col-sm-4" key={person._id}>
                        <PeopleCard person={person} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PeopleList;