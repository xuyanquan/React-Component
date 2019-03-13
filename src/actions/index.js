
export function addCount(i) {
    return {
        type: 'ADD_NUM',
        payload: {
            i
        }
    }
}

export function deleteCount(j) {
    return {
        type: 'DELETE_NUM',
        payload: {
            j
        }
    }
}
