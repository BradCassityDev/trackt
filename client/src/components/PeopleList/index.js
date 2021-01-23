import React from 'react';
import Auth from '../../utils/auth';

import PeopleCard from '../PeopleCard';

const PeopleList = ({ people }) => {

    return (
        <div className="content-wrapper">
            <h4>Site Members</h4>
            <hr></hr>
            <div className="row">
                {people.map(person => (
                    <div className="col-12 col-sm-4">
                        <PeopleCard person={person} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PeopleList;