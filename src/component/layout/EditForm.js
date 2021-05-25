import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import useInput from '../../customhook/useInput';

import {editNote} from '../../store/action/noteAction';

import '../../styles/editform.scss';
import { Form, FormControl, FormGroup } from 'react-bootstrap';

const EditForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const note = useSelector(state => state.note);
    const [title, bindTitle, resetTitle] = useInput(note.title);
    const [content, bindContent, resetContent] = useInput(note.content);

    
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(editNote({id: note.id, title, content}));
        resetTitle();
        resetContent();
        history.push('/');
    }
    
    return (
        <div className="section">
            <Form onSubmit={submitHandler}>
                <h5 className="card-title">
                    Edit Note
                </h5>

                <FormGroup controlId="exampleForm.ControlInput1">
                    <FormControl type="text" placeholder="Note title" {...bindTitle}/>
                </FormGroup>

                <FormGroup controlId="exampleForm.ControlTextarea1">
                    <FormControl as="textarea" rows={3} placeholder="Note content" {...bindContent}/>
                </FormGroup>

                <button className='button-submit' type="submit">Update Note</button>
            </Form>
        </div>
    )
}

export default EditForm
