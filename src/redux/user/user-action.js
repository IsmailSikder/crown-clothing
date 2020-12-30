

import { userActionType } from './user.types.js'
export const setCurrentUser = user =>(
    {
        type:userActionType.SET_CURRENT_USER,
        payload: user
    }  
)