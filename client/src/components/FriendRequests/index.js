import React, { useState, useEffect } from 'react';
import { ADD_FRIEND, REMOVE_FRIEND, ACCEPT_FRIEND } from '../../utils/mutations';
import { useMutation } from '@apollo/react-hooks';
import Button from 'react-bootstrap/Button';
import Auth from '../../utils/auth';
import Modal from 'react-bootstrap/modal';

const FriendRequests = ({ friendRequests }) => {
   
    const [isOpen, setIsOpen] = useState(false);
    //return(<></>);
    return (
       <>
            <Button variant="primary" onClick={()=>setIsOpen(true)}>
                <span>
                    <i onClick ={ ()=>{setIsOpen(true); console.log('hit me')} } className="fa fa-user-plus" aria-hidden="true"></i>
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
                                    <span><span className="label-text">{friend.username}</span> has sent you a friend request.</span>
                                    <Button variant="success">Accept</Button>
                                    <Button variant="danger">Reject</Button>
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