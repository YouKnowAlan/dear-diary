import React from 'react'
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import NotesList from './Noteslist'

// import images
import star from '../../images/star.svg';

import '../../styles/favorite.scss';

const Favorite = () => {
    useFirestoreConnect([{collection: 'notes', orderBy: ['createdAt', 'desc'], where: ['favorite', '==', true], storeAs: 'favnotes'}]);
    const favNotes = useSelector(state => state.firestore.ordered.favnotes);
    console.log('favnotes', favNotes);
    return (
        <div className="favorite-section">
            <span className="favorite-title">
                <img src={star} className="icon-title"/>
                <h5>Favorite Notes</h5>
                <img src={star} className="icon-title" />
            </span>

            <NotesList notes={favNotes} className="favorite-list"/>
        </div>
    )
}

export default Favorite
