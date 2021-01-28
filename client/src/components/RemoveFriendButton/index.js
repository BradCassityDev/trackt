import React, { useState, useEffect } from 'react';
import { REMOVE_FRIEND } from '../../utils/mutations';
import { useMutation } from '@apollo/react-hooks';
import Button from 'react-bootstrap/Button';
import Auth from '../../utils/auth';

const RemoveFriendButton = ({ friendid, setButtonState }) => {

    const [removeFriend, { error }] = useMutation(REMOVE_FRIEND);
    
    // Add Friend Event Handler
    const removeFriendHandler = async event => {
        const userId = Auth.getProfile().data._id;
        console.log(friendid, userId);

        try {
            await removeFriend({
                variables: {
                    id: friendid
                }
            });

            setButtonState(2);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <Button variant="danger" friendid={friendid} onClick={()=>removeFriendHandler()}>Remove Friend</Button>
    );
};

export default RemoveFriendButton;