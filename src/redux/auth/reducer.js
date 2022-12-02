import {
    ADD_AUTH,
    REMOVE_AUTH,
} from './actions'

const initialState = {
    isLogin: false,
    profile_detail: {}
}

export default function authReducer(state=initialState , action) {
    const { type , payload } = action 

    switch (type) {
        case ADD_AUTH:
            return {
                isLogin: true,
                profile_detail: payload
            }

        case REMOVE_AUTH:
            return {
                isLogin: false,
                profile_detail: {}
            }
    
        default:
            return state
    }
}