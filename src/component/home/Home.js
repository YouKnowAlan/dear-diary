import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Noteslist from '../layout/Noteslist';
import FormSection from './Form';
import { Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase'

// import images
import downFingerImg from '../../images/down.png'
const Home = () => {
    useFirestoreConnect([{ collection: 'notes', orderBy: ['createdAt', 'desc'] }]);
    const notes = useSelector((state) => state.firestore.ordered.notes);
    const [text, setText] = useState('');
    const [id, setId] = useState('');
    const [suggestions, setSuggestions] = useState([])

    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length > 0) {
            matches = notes.filter(note => {
                const regex = new RegExp(text, "gi");
                return note.title.match(regex);
            });
        }
        setSuggestions(matches);
        setText(text);
    }

    const onSuggestHandler = (title, id) => {
        setText(title);
        setId(id);
        setSuggestions([]);
    }

    return (
        <div className="container-fluid">
            <Row className="justify-content-center">
                <Col lg={5} className="form-field"><FormSection /></Col>
                <Col lg={7} className="notes-field">
                    <h5>Search the past notes here <img src={downFingerImg} className="icon-title" /></h5>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            value={text}
                            onChange={e => onChangeHandler(e.target.value)}
                            className="searchText" />
                        <Link to={`/note/${id}`} className="link-detail ml-auto"><Button variant="outline-danger" className="button-detail">get detail</Button></Link>
                    </Form>
                    {suggestions && suggestions.map((suggestion, id) =>
                        <div key={id} className="suggestion" onClick={() => onSuggestHandler(suggestion.title, suggestion.id)}>{suggestion.title}</div>
                    )}

                </Col>
            </Row>
            <section className="notes-list">
                <h5>Notes list</h5>
                <Noteslist notes={notes} />
            </section>
        </div>
    )
}

export default Home;
