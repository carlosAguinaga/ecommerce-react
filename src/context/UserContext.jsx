import React, { createContext, useReducer } from 'react'

const UserContext = createContext()

const initialState = {
    user: "",
    password: "",
    isOnSession: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS":
            return {
                user: action.payload.user,
                email: action.payload.email,
                isOnSession: true
            }
    
        default:
            return state
    }
}

const UserProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const data = {state, dispatch}

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}
