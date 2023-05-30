import { ADD_NEW_PHONE, DELETE_PHONE, UPDATE_PHONE } from "./actionTypes"

const initialState={
    phonebook:[],
    isLoading: false,
    isError: false,
}

export const reducer=(state=initialState, {type, payload})=>{

    switch(type){
        case ADD_NEW_PHONE:{
            return {...state, phonebook:[...state.phonebook, payload]}
        }
        case UPDATE_PHONE:{
            return 
        }
        case DELETE_PHONE:{
            return 
        }
        default:{
            return state
        }
    }
}