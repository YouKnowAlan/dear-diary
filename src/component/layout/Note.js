import { Card } from 'react-bootstrap';
import { FaRegHeart, FaHeart, FaTrashAlt, FaPen } from 'react-icons/fa';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import {deleteNote} from '../../store/action/noteAction';
import {favoriteNote} from '../../store/action/noteAction';

// style
import '../../styles/note.scss';

import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const Note = ({ note }) => {
    dayjs.extend(relativeTime);

    const dispatch = useDispatch();
    
    const deleteNoteFunc = () => {
        dispatch(deleteNote(note));
    }

    const addToFavorite = () => {
        dispatch(favoriteNote(note));
    }

    const editNoteFunc = () => {
        dispatch({type: 'EDIT_NOTE', payload: note})
    }

    const favoriteMarkup = note.favorite ? <FaHeart /> : <FaRegHeart />

    return (
        <Card className="cardNote">
            <Card.Body>
                <div className="favorite-remove-icon">
                    <div className="favorite-icon" onClick={addToFavorite}>
                        {favoriteMarkup}
                    </div>
                    
                    <FaTrashAlt className="remove-icon" onClick={deleteNoteFunc}/>
                </div>
                <Link to={"/note/" + note.id}><Card.Title>{note.title}</Card.Title></Link>
                <Card.Text>{note.content}</Card.Text>
                <Card.Text className="text-muted">{dayjs(note.createdAt.toDate()).fromNow()}</Card.Text>
                <div className="edit-icon">
                    <Link to={`/editform/${note.id}`}><FaPen onClick={editNoteFunc} /></Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Note
