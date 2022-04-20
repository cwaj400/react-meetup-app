import React, {Component} from 'react';
import {useContext} from 'react';
import FavoritesContext from "../store/favorites-contex";
import MeetupList from '../components/meetups/MeetupList'

const Favorites = () => {
    const favoritesCtx = useContext(FavoritesContext);
    console.log(favoritesCtx.favorites | JSON);

    let content;
    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You have no favorites!</p>
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites}/>
    }

    return (
        <div>
            <section>
                <h1>
                    My Favorites
                </h1>
                {content}
            </section>
        </div>
    );
}

export default Favorites;
