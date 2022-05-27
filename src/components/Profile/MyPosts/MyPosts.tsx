import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea className={classes.textarea}></textarea>
                <button>Send</button>
            </div>
            <div>
                <Post
                    message={'Hello'}
                    likesCount={12}
                />
                <Post
                    message={'Hi'}
                    likesCount={10}
                />
                <Post
                    message={'Glad to see you'}
                    likesCount={0}
                />
                <Post
                    message={'Ty'}
                    likesCount={8}
                />
            </div>
        </div>
    )
}