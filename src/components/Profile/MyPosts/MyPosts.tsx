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
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}