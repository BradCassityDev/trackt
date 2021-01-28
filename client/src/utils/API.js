// API call to delete photo from Cloudinary
export const deletePhoto = (photo) => {
    console.log(photo);

    const body = {
        photo: photo
    }

    return fetch('/deletephoto', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
};