// API call to delete photo from Cloudinary
export const deletePhoto = (photo) => {
  console.log(photo);

  const body = {
    photo: photo,
  };

  return fetch("/deletephoto", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

// API call to upload photo to Cloudinary
export const uploadPhoto = (username) => {
  console.log(username);
  const body = {
    username: username,
  };

  return fetch("/uploadphoto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
