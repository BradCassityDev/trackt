import React, { useState } from "react";
import Auth from "../../utils/auth";
import { useQuery, useMutation } from "@apollo/react-hooks";
import image from "../../images/placeholder-profile-pic.png";
import { UPDATE_USER } from "../../utils/mutations";
import FriendButton from "../FriendButton";
import ProfileDetails from "../ProfileDetails";
import FriendRequests from "../FriendRequests";

const ProfileCard = ({ user }) => {
  const [updateUser, { error }] = useMutation(UPDATE_USER);

  function showUploadWidget() {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "trackt",
        cropping: true,
        upload_preset: "trackt",
        uploadSignature: generateSignature,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const pfp = result.info.secure_url;
          console.log(pfp);
          user.profilePhoto = pfp;
          updateUser({
            variables: {
              profilePhoto: user.profilePhoto,
              _id: user._id,
            },
          });
        }
      }
    );
  }

  const generateSignature = async () => {
    try {
      await fetch('/api/signature')
      .then((response => {
        return console.log(response.json())
      }))
    } catch (error) {
      console.error(error);
    }
  };

  // const [fileInputState, setFileInputState] = useState("");
  // const [selectedFile, setSelectedFile] = useState("");
  // const [previewSource, setPreviewSource] = useState();

  // const handleFileInputChange = (e) => {
  //   const file = e.target.files[0];
  //   previewFile(file);
  // };

  // const previewFile = (file) => {
  //   setPreviewSource(file);

  //   // const reader = new FileReader();
  //   // reader.readAsDataURL(file);
  //   // reader.onloadend = () => {
  //   // };
  // };

  // const handleSubmitProfilePicture = (e) => {
  //   e.preventDefault();
  //   if (!previewSource) return;
  //   uploadImage(previewSource);
  // };

  // const username = user.username;
  // // console.log(username)

  // const uploadImage = async (file) => {
  //   console.log(file);

  // }

  console.log(user.friendRequests);

  // Handle user edit form submit
  const handleEditUserSubmit = async (event) => {
    event.preventDefault();
  };

  const renderCardDetails = () => {
    if (Auth.getProfile().data.username !== user.username) {
      return (
        <div>
          <ProfileDetails user={user} />
          <hr />
        </div>
      );
    } else {
      return (
        <form className="edit-profile-form" onSubmit={handleEditUserSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="form-control"
            ></input>
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="form-control"
            ></input>
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
            ></input>
          </div>

          <div>
            <button type="submit" className="btn btn-default">
              Save Changes
            </button>
          </div>
        </form>
      );
    }
  };

  return (
    <div className="content-wrapper">
      <div className="card text-center profile-card">
        <div className="card-body">
          <img
            src={user.profilePhoto ? user.profilePhoto : image}
            alt="profile pic"
            className="rounded-circle profile-image"
          />
          {Auth.getProfile().data.username === user.username && (
            // <form onSubmit={handleSubmitProfilePicture}>
            <div>
              {/* <button className="btn btn-link" onClick={showUploadWidget}>
                Change Profile Picture
              </button> */}
              {/* <input type="file" onChange={handleFileInputChange} /> */}
              <button
                type="submit"
                className="btn btn-default"
                onClick={showUploadWidget}
              >
                Change Profile Picture
              </button>
            </div>
            // </form>
          )}
          {/* {previewSource && (
            <>
              <p>Preview</p>
              <img
                src={previewSource}
                alt="chosen"
                className="rounded-circle profile-image"
              />
            </>
          )} */}
          <h5 className="card-title mt-3">{user.username}</h5>
          <hr></hr>
          {renderCardDetails()}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
