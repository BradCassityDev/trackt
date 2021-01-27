import React, { useState, useEffect } from 'react';
import { ADD_FRIEND, REJECT_FRIEND, REMOVE_FRIEND, ACCEPT_FRIEND } from '../../utils/mutations';
import { useMutation } from '@apollo/react-hooks';
import Button from 'react-bootstrap/Button';
import Auth from '../../utils/auth';
import Modal from 'react-bootstrap/modal';

const FriendRequests = ({ friendRequests }) => {
   
    const [isOpen, setIsOpen] = useState(false);
    const [acceptFriend, { acceptError }] = useMutation(ACCEPT_FRIEND);
    const [rejectFriend, { rejError }] = useMutation(REJECT_FRIEND);

    // Accept Friend Request Handler
    const acceptFriendRequest = async friendId => {
        const userId = Auth.getProfile().data._id;

        console.log("Accepted: ",friendId);

        try {
            await acceptFriend({
                variables: {
                    id: friendId
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

    // Reject Friend Request
    const rejectFriendRequest = async friendId => {
        const userId = Auth.getProfile().data._id;

        console.log("Rejected: ",friendId);
        try {
            await rejectFriend({
                variables: {
                    id: friendId
                }
            });
        } catch (err) {
            console.log(err);
        }
    };


    return (
       <>
            <Button variant="primary" onClick={()=>setIsOpen(true)} className="btn-default">
                <span>
                    <i onClick ={ ()=>{setIsOpen(true); console.log('hit me')} } className="fa fa-user-plus" aria-hidden="true"></i>
                    {" " + friendRequests.length + " "}Friend Requests
                </span>
            </Button>
            <Modal 
                show={isOpen} 
                onHide={()=>setIsOpen(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Friend Requests</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {friendRequests && friendRequests.length ?
                        <ul className="list-group"> 
                            {friendRequests.map(friend => (
                                <li className="list-group-item" key={friend._id}>
                                    <span className="float-left"><span className="label-text">{friend.username}</span> has sent you a friend request.</span>
                                    <Button variant="success" className="float-right ml-3" onClick={()=>acceptFriendRequest(friend._id)}>Accept</Button>
                                    <Button variant="outline-danger" className="float-right" onClick={()=>rejectFriendRequest(friend._id)}>Reject</Button>
                                </li>
                            ))}
                        </ul>
                    :
                        <div>
                            <p>You have no friend requests.</p>
                        </div>
                    }
                </Modal.Body>
            </Modal>
       </>
    );
};

export default FriendRequests;