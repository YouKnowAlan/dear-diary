import Note from './Note'

// style
import '../../styles/notes.scss';

const Noteslist = ({ notes }) => {
    return (
        <div className="notes-list">
            <div className="note-list">
            {notes && notes.map(note => <Note note={note} key={note.id}/>)}
            </div>
        </div>
    )
}

export default Noteslist
