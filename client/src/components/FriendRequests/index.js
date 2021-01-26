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
            <Modal show={isOpen} onHide={()=>setIsOpen(false)}>
            {friendRequests && friendRequests.length ? 
                friendRequests.map(friend => (
                    <div key={friend._id}>
                        {friend._id + " " + friend.username}
                    </div>
                ))
            :
                <div>
                    <p>You have no friend requests.</p>
                </div>
            }
            </Modal>
       </>
    );
};

export default FriendRequests;