import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={classes.profile}>
            <div>
                <img
                    src={'https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000'}
                    alt={'profile-img'}
                    className={classes.img}
                />
            </div>
            <div>
                Ava + descr
            </div>
            <MyPosts/>
        </div>
    )
}