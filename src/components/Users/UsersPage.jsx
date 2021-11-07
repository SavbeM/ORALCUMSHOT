import React from "react";
import c from "./UsersPage.module.css"
import * as axios from "axios";


export class UsersPage extends React.Component{
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response) => {
            props.setUsers(response.data.items)});
    }

    render() {
        return (<div>

                <div className={c.users}>
                    {this.props.users.map((u) => <div key={u.id}>


                        <div className={c.user}>
                            <div className={c.followUsers}>
                                <div className={c.ava}>
                                    {(u.photos.small == null) ? <img src="https://www.pngarts.com/files/11/Avatar-PNG-Download-Image.png"/> : <img src={u.photos.small}/>}
                                </div>
                                <div className={c.follow}>
                                    {(u.followed) ? <button className={c.followed} onClick={() => {
                                        this.props.unfollow(u.id);
                                        props.Swal()
                                    }}>FOLLOW</button> : <button className={c.unfollowed}
                                                                 onClick={() => this.props.follow(u.id)}>UNFOLLOW</button>}
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
        )
    }

}

