import { GET_USER_TOKEN_GETTER,GET_USERID_AFTER_LOGIN, IS_USER_AUTHENTICATE_GETTER,GET_TASK_ID_AFTER_ADDING } from "../../StoreConstants";
export default {
    [GET_USER_TOKEN_GETTER]: (state) => {
        return state.token;
    },
    [GET_USERID_AFTER_LOGIN]: (state) => {
        return state.userId;
    },
    [IS_USER_AUTHENTICATE_GETTER]: (state) => {
        return !!state.token;
    },
    [GET_TASK_ID_AFTER_ADDING]: (state) => {
        return state.taskId;
    }
};