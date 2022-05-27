import React from "react";
import classes from "./Post.module.css";

type PostPropsType = {
    message: string,
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={classes.item}>
            <img
                className={classes.avatar}
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU'}
                alt={'avatar'}
            />
            <span>{props.message}</span>
            <p>
                Likes count: {props.likesCount}
            </p>
        </div>
    )
}