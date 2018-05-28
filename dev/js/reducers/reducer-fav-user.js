export default function (state = null, action) {
    // newState = state;
    switch (action.type) {
        case 'FAV_USER':
            if(state != null) {
                console.log(action.payload.favouritised);
                state.favouritised = (action.payload.favouritised)? false : true ;
            }
            return state;
            break;
    }
    return state;
}