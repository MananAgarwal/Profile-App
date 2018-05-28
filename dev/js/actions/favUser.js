export const favUser = (user) => {
    console.log("You favouritised ", user.first);
    return {
        type: 'FAV_USER',
        payload: user
    }
};