import React from "react";
import classes from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={classes.nav}>
            <ul>
                <a href={'#s'} className={classes.active}>
                    <li className={classes.item}>Profile</li>
                </a>
                <a href={'#s'}>
                    <li className={classes.item}>Messages</li>
                </a>
                <a href={'#s'}>
                    <li className={classes.item}>News</li>
                </a>
                <a href={'#s'}>
                    <li className={classes.item}>Music</li>
                </a>
                <a href={'#s'}>
                    <li className={classes.item}>Settings</li>
                </a>
            </ul>
        </div>
    )
}