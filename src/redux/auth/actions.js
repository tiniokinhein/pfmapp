export const ADD_AUTH = 'ADD_AUTH'
export const REMOVE_AUTH = 'REMOVE_AUTH'

export const addAuth = () => dispatch => {
    const data = {
        name: 'Khaing',
        email: 'khaingzinthwal7@gmail.com'
    }

    dispatch({
        type: ADD_AUTH,
        payload: data
    })
}

export const removeAuth = auth => dispatch => {
    dispatch({
        type: REMOVE_AUTH,
        payload: auth
    })
}