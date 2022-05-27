import React from "react";
import classes from "./Post.module.css";

export const Post = () => {
    return (
        <div className={classes.item}>
            <img
                className={classes.avatar}
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU'}/>
            <span>Post 1</span>
        </div>
    )
}