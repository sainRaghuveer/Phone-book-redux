import { ADD_NEW_PHONE, DELETE_PHONE, UPDATE_PHONE } from "./actionTypes";

export const addNewPhoneAction=(payload)=>{
    return{
        type:ADD_NEW_PHONE, payload
    }
};

export const updatePhoneAction=(payload)=>{
    return{
        type:UPDATE_PHONE, payload
    }
};

export const deletePhoneAction=()=>{
    return{
        type:DELETE_PHONE
    }
}