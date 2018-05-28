export const selectUser = (activeUserId) => {
    console.log("You clicked on user: ", activeUserId);
    return {
        type: 'USER_SELECTED',
        payload: activeUserId
    }
};
