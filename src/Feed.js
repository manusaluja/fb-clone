import React, {useEffect, useState} from 'react'
import './Feed.css'
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";
function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp","desc")
            .onSnapshot((snapshot => {
            console.log(snapshot)
          setPosts(snapshot.docs.map((doc) => ({id:doc.id, data: doc.data()})))
        }))
    }, []);

    return (
        <div className="feed">
            <StoryReel></StoryReel>
            {/*StoryReel*/}
            <MessageSender />
            {/*MessageSender*/}
            {posts.map(post => (
                <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image} />
            ))}
            {/*<Post*/}
            {/*    profilePic="https://miro.medium.com/fit/c/262/262/0*p6TWEILQTw_o7TBV."*/}
            {/*    image="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/the_health_benefits_of_yoga_ref_guide/650x350_the_health_benefits_of_yoga_ref_guide.jpg"*/}
            {/*    message="Morning Yoga"*/}
            {/*    timestamp="02-02-2021 10:10:20Z"*/}
            {/*    username="SorabhSaluja"*/}
            {/*></Post>*/}
            {/*<Post*/}
            {/*    profilePic="https://miro.medium.com/fit/c/262/262/0*p6TWEILQTw_o7TBV."*/}
            {/*    image="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/the_health_benefits_of_yoga_ref_guide/650x350_the_health_benefits_of_yoga_ref_guide.jpg"*/}
            {/*    message="Morning Yoga"*/}
            {/*    timestamp="02-02-2021 10:10:20Z"*/}
            {/*    username="SorabhSaluja"*/}
            {/*></Post>*/}

        </div>
    )
}

export default Feed
