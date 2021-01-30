import React from "react";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import image from '../../images/placeholder-profile-pic.png';

function PostHeader ({ username, profilePhoto, createdAt }) {
    // console.log(profilePhoto)
  return (
    <div className="post-header">
      <Link to={"/" + username} className="post-header-text">
        <div className="profile-img-left">
        <Image
              className="rounded-circle profile-image-sm"
              cloudName="trackt"
              public_id={`trackt-user-pfp/${username}.jpg`}
              onError={() => {console.log(this)}}
              ></Image>
          {/* {true ? (
            <Image
              className="rounded-circle profile-image-sm"
              cloudName="trackt"
              public_id={`trackt-user-pfp/${username}`}
              onError={console.log(this)}
              ></Image>
          ) : (
            <img
              src={image}
              alt="profile pic"
              className="rounded-circle profile-image-sm"
            />
          )} */}
        </div>
        <span className="username">{username}</span> <br />
        <span className="item-timestamp">{createdAt}</span>
      </Link>
    </div>
  );
};

export default PostHeader;
