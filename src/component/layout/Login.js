import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [loginStats, setLoginStats] = useState(false)

    const signin = () => {
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            setLoginStats(true);
            console.log(res.user);
            console.log('sign in success');
        })
        .catch(err => console.log(err));
    }

    const signout = () => {
        if(loginStats === true) {
            firebase.auth().signOut()
            .then(() => {
                setLoginStats(false);
                console.log('sign out success');
            })
            .catch(err => console.log(err));
        }
    }

    const loginMarkup = loginStats === true ? (
        <Button variant="outline-danger" onClick={signout}>Sign out</Button>
    ) : (
        <Button variant="outline-danger" onClick={signin}>Sign in</Button>
    )

    return (
        <div>
            {loginMarkup}
        </div>
    )
}

export default Login
