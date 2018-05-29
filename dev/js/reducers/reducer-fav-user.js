export default function (state = [1,2], action) {
    switch (action.type) {
        case 'FAV_USER':
                if(state.includes(action.payload.id)) {
                    var index = state.indexOf(action.payload.id);
                    state.splice(index, 1);
                }
                else {
                    state.push(action.payload.id);
                }
                return state;
                break;
    }
    return state;
}