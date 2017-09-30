export default function(state = null, action) {
    switch (action.type) {
        case 'HERO_SELECTED':
            return action.payload;
        default:
            return state;
    }
}