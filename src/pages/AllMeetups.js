import React from 'react';
import MeetupList from '../components/meetups/MeetupList'
import {useState, useEffect} from 'react'

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

const AllMeetupsPage = () => {
    //whole page reloads when state is changed.
    //first element is current state snapshot, second is to update the state.
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('').then(res => {
            return res.json();
        }).then(data => {
            const meetupData = [];
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetupData.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetupData);
        })
    }, [])



    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    } else {
        return (
            <section>
                <h1>All Meetups</h1>
                <MeetupList meetups={loadedMeetups}/>
            </section>
        );
    }
};

export default AllMeetupsPage;
