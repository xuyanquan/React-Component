
export default function (state = {i: 0, testone: 'ss'}, action) {
    console.log('one reducers done', action)
    switch (action.type) {
        case 'DELETE_NUM': 
            return {
                ...state,
                i: state.i - action.payload.j
            }
        default:
            return state
    }
}
