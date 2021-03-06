import React from 'react';
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useNavigate} from 'react-router-dom';

const NewMeetups = (prop) => {
    const history = useNavigate();

    function addMeetupHandler(meetupData) {
        const f = fetch('',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        f.then(data => {
            history('/', {replace: true})
        })
    }

    return (
        <div>
            Some stuff

            <section>
                <h1>Add new meetup</h1>
                <NewMeetupForm onAddMeetup={addMeetupHandler}/>
            </section>
        </div>

    );
}

export default NewMeetups;
