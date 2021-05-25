export const addNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('notes')
            .add({
                ...note,
                favorite: false,
                createdAt: new Date()
            })
            .then(() => {
                console.log('new note successfully created');
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const deleteNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('notes').doc(note.id).delete()
            .then(() => {
                console.log('note successfully deleted');
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const favoriteNote = (note) => {
    const favStatus = !note.favorite;
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('notes').doc(note.id).update({
            favorite: favStatus,
        })
        .then(() => {
            console.log('note successfully add to favorite');
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export const editNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('notes').doc(note.id).update({
            title: note.title,
            content: note.content
        })
        .then(() => {
            console.log('note successfully add to favorite');
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

