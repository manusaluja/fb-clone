import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
import {React, useState} from 'react'
import './MessageSender.css'
import {useStateValue} from "./StateProvider";

import firebase from 'firebase/app';
import 'firebase/firestore';
import db from "./firebase";

function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })
        setInput("")
        setImageUrl("")
    }

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    return (
        <div className="message__sender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}></Avatar>
                <form>
                    <input
                        type="text"
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        placeholder={`Whats on your mind ${user.displayName}!`} className="messageSender_input">

                    </input>
                    <input
                        value={imageUrl}
                        onChange={(e)=>setImageUrl(e.target.value)}
                        placeholder="Image URL (Optional)"></input>

                    <button onClick={handleSubmit}>Hidden Submit</button>

                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{color:'red'}}></Videocam>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{color:'green'}}></PhotoLibrary>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{color:'orange'}}></InsertEmoticon>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
