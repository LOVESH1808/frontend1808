import { SET_USER_TOKEN_DATA_MUTATION, GET_USERID_AFTER_LOGIN, GET_TASK_ID_AFTER_ADDING } from "../../StoreConstants";

export default {
    [SET_USER_TOKEN_DATA_MUTATION](state,payload) {
        state.token = payload.token;
    },
    [GET_USERID_AFTER_LOGIN](state,payload) {
        state.userId = payload.userId;
    },
    [GET_TASK_ID_AFTER_ADDING](state,payload) {
        state.taskId = payload.taskId;
    }
};