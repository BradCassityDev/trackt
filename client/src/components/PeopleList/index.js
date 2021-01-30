import React, { useState, useEffect } from 'react';
import Auth from '../../utils/auth';
import { QUERY_USERS } from '../../utils/queries'
import PeopleCard from '../PeopleCard';
import { useQuery } from '@apollo/react-hooks';

const PeopleList = ({ friendsList }) => {
    // Query Goals
    const { loading, data } = useQuery(QUERY_USERS);

    const [peopleState, setPeopleState] = useState(0);

    // useEffect
    useEffect(() => {
    }, [data, peopleState] );
        
    if (loading) {
        return <div>Loading...</div>;
    }

    // Check if person is friend of current user
    const checkFriendship = (personId) => {
        let isFriend = false;

        if(friendsList.length) {
            for (let i = 0; i < friendsList.length; i++) {
                if (personId === friendsList[i]._id) {
                    isFriend = true;
                }
            }
        }

        return isFriend;
    }

    return (
        <div className="content-wrapper">
            <h4>Site Members</h4>
            <hr></hr>
            <div className="row">
                {data.users.map(person => 
                    (Auth.getProfile().data.username !== person.username && 
                        <div className="col-12 col-sm-4" key={person._id}>
                            <PeopleCard person={person} isFriend={checkFriendship(person._id)} peopleState={peopleState} setPeopleState={setPeopleState} />
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default PeopleList;