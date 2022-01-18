import React from "react";
import c from "./UsersPage.module.css";
import {Link} from "react-router-dom";



export const UsersFunc = (props) => {

    return (
        <>
            <div className={c.wrapper}>
                <div className={c.pagination}>
                    {props.pagination}
                </div>
                <div className={c.users}>
                    {props.users.map((u) => <div key={u.id}>
                        <div className={c.user}>
                            <div className={c.followUsers}>
                                <Link to={`/profile/${u.id}`}>
                                    <div className={c.ava}>
                                        {!u.photos.small ?
                                            <img
                                                src="https://www.pngarts.com/files/11/Avatar-PNG-Download-Image.png"/> :
                                            <img src={u.photos.small}/>}
                                    </div>
                                </Link>
                                <div className={c.follow}>

                                    {(u.followed) ?
                                        <button disabled={props.userFollowingInProgres.some(id => id === u.id)} className={c.followed} onClick={() => props.unfollow(u.id)}
                                        >FOLLOW</button>
                                        :
                                        <button disabled={props.userFollowingInProgres.some(id => id === u.id)} className={c.unfollowed}
                                                onClick={() => props.follow(u.id)
                                                }>UNFOLLOW</button>}
                                </div>
                            </div>
                            <div className={c.userInfo}>
                                <div className={c.init}>
                                    <div className={c.name}>
                                        {u.name}
                                    </div>
                                    <div className={c.status}>
                                        {u.status}
                                    </div>
                                </div>
                                <div className={c.location}>
                                    {u.location}
                                </div>
                            </div>
                        </div>

                    </div>)}
                </div>
            </div>
        </>
    )
}