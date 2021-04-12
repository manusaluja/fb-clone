import React from 'react'
import './Post.css'
import {Avatar} from "@material-ui/core";
import {AccountCircle, ChatBubbleOutline, ExpandMore, NearMe, ThumbUp} from "@material-ui/icons";
function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"></Avatar>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    {/*<p>{new Date(timestamp?.toUTCString())}</p>*/}
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>


            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt="" />
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUp></ThumbUp>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline></ChatBubbleOutline>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe></NearMe>
                    <p>Share</p>
                </div>

                <div className="post__option">
                    <AccountCircle></AccountCircle>
                    <ExpandMore></ExpandMore>

                </div>
            </div>
        </div>
    )
}

export default Post
