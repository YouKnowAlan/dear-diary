import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// component
import useInput from '../../customhook/useInput';
import {addNote} from '../../store/action/noteAction';

// image
import stickerNotes from '../../images/post-it.png';

// style
import '../../styles/form.scss';

import { Form, FormGroup, FormControl } from 'react-bootstrap'


const FormSection = () => {
    const dispatch = useDispatch()
    const [title, bindTitle, resetTitle] = useInput('');
    const [content, bindContent, resetContent] = useInput('');
    const [isClicked, setIsClicked] = useState(false);
    const [buttonClassSubmit, setButtonClassSubmit] = useState('button-submit')

    useEffect(() => {
        console.log(isClicked);
        if(isClicked === false) {
            setButtonClassSubmit('button-submit');
        }
        if(isClicked === true) {
            setButtonClassSubmit('button-submit animate');
        }
        
        const timeout = setTimeout(() => {
            setIsClicked(false);
        }, 700);
        return () => {
            clearTimeout(timeout);
        }
    }, [isClicked])

    
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addNote({title, content}));
        resetTitle();
        resetContent();
    }
    
    return (
        <div className="section">
            <Form onSubmit={submitHandler}>
                <h5 className="card-title">
                    New note
                    <span><img src={stickerNotes} className="stickerNotes"/></span>
                </h5>

                <FormGroup controlId="exampleForm.ControlInput1">
                    <FormControl type="text" placeholder="Note title" {...bindTitle}/>
                </FormGroup>

                <FormGroup controlId="exampleForm.ControlTextarea1">
                    <FormControl as="textarea" rows={3} placeholder="Note content" {...bindContent}/>
                </FormGroup>

                <button className={buttonClassSubmit} type="submit" onClick={() => setIsClicked(!isClicked)}>add note</button>
            </Form>
        </div>
    )
}

export default FormSection;