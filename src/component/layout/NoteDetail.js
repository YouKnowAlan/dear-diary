import React from 'react'
import { Card } from 'react-bootstrap';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import * as dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import calendar from 'dayjs/plugin/calendar';

import '../../styles/noteDetail.scss';

const NoteDetail = (props) => {
    dayjs.extend(relativeTime);
    dayjs.extend(calendar);
    const id = props.match.params.id;
    useFirestoreConnect([{collection: 'notes', doc:id}]);
    const note = useSelector(({firestore: {data}}) => data.notes && data.notes[id]);
    
    const noteDetailMarkup = !isLoaded(note) ? (
        <Card className="note-detail">
            <Card.Body>
                <Card.Text className="note-title">Loading...</Card.Text>
            </Card.Body>
            <Card.Footer>

            </Card.Footer>
        </Card>
    ) : isEmpty(note) ? (
        <Card className="note-detail">
            <Card.Body>
                <Card.Text className="note-title">Note doesn't exist</Card.Text>
                
            </Card.Body>
            <Card.Footer>
                
            </Card.Footer>
        </Card>
    ) : (
        <Card className="note-detail">
            <Card.Body>
                <Card.Text className="note-title">{note.title}</Card.Text>
                <Card.Text className="note-content">{note.content}</Card.Text>
            </Card.Body>
            <Card.Footer>
                {dayjs(note.createdAt.toDate()).calendar()}
            </Card.Footer>
        </Card>
    );

    return (
        noteDetailMarkup
    )
}

export default NoteDetail
