import {createContext, useState} from 'react'

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {
    },
    removeFavorite: (meetupId) => {
    },
    itemIsFavorite: (meetupId) => {
    }
});

//updates context values and alerts other components of any changes. Wrap this around any components that want to
// know about it.
export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favMeetup)
        })
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (<FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>)
}

export default FavoritesContext;
