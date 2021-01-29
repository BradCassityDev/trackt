import React, { useState, useEffect } from 'react';
import { ADD_FRIEND, REMOVE_FRIEND, ACCEPT_FRIEND } from '../../utils/mutations';
import { useMutation } from '@apollo/react-hooks';
import Button from 'react-bootstrap/Button';
import Auth from '../../utils/auth';

const FriendButton = ({ friendid, peopleState, setButtonState, setPeopleState, setFriendState, setPendingFriendRequest }) => {

    const [addFriend, { error }] = useMutation(ADD_FRIEND);
    
    // Add Friend Event Handler
    const addFriendHandler = async event => {
        const userId = Auth.getProfile().data._id;
        console.log(friendid, userId);

        try {
            await addFriend({
                variables: {
                    id: friendid
                }
            });

            // setPendingFriendRequest(true);
            // setFriendState(true);
            setButtonState(3);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <Button variant="success" friendid={friendid} onClick={()=>addFriendHandler()}>Add Friend</Button>
    );
};

export default FriendButton;