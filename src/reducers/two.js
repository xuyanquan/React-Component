
const initialState = {
    i: 0
}

export default function (state = initialState, action) {
    console.log('two reducers done', action)
    switch (action.type) {
        case 'ADD_NUM': {
            return {
                ...state,
                i: state.i + action.payload.i
            }
        }

        default:
            return state
    }
}
