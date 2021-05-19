import React from  'react';
const Profile = () => {
   return( <div className='content'>
        <div className='user-content-upper-img'>
            <img className='content-upper-img'
                 src="https://ostagram1.ams3.cdn.digitaloceanspaces.com/uploads/content/image/1802077/img_fc7bc2b3b9.jpg"></img>
        </div>
        <div className='profile-info'>
            <div className='profile-photo'>
                <img src='https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png'></img>
            </div>
            <div className='profile-text-info'>
                <div className='profile-title'>
                    Mark Selikhov
                </div>
                <div className='profile-subtitle'>
                    <p>Age</p>
                    <p>Country</p>
                    <p>Number</p>
                </div>
            </div>
        </div>
        <div className='my-post'>
            <div className='my-post-title'>
                My post
            </div>
            <div className='my-post-input'>
                <input></input>
                <button className='send'>SEND</button>
            </div>

            <div className='my-post-history'>
                My post about...
            </div>

        </div>
    </div>
   );
}
export default Profile