import { createContext, useEffect, useReducer } from "react";
import reducer from './reducer.common.context'
import { INITIAL_STATE } from "./constants.common.context";
import { CommonContextFunctionsRegister } from "./functions.common.context";

export const CommonContext = createContext(INITIAL_STATE)

export const CommonContextProvider = ({ children, ...rest }) => {



    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('common_context') || JSON.stringify(INITIAL_STATE)) || INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem('common_context', JSON.stringify(state))
    }, [state])

    const functions = CommonContextFunctionsRegister({ state, dispatch })


    return (
        <CommonContext.Provider value={{
            ...state,
            ...rest,
            dispatch,
            state,
            functions
        }}>
            { children }
        </CommonContext.Provider>
    )
}