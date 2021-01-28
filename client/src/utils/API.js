// API call to delete photo from Cloudinary
export const deletePhoto = (photo) => {
    return fetch('/deletephoto', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(photo)
    })
};