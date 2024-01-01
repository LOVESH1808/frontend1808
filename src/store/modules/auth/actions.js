import { SET_USER_TOKEN_DATA_MUTATION,
     SIGN_UP_ACTION,
    LOADING_BAR_SHOW_MUTATION,
    LOGIN_ACTION,
    GET_USERID_AFTER_LOGIN,
    LOGOUT_ACTION,
    ADD_TASK_ACTION , GET_TASK_ID_AFTER_ADDING, DELETE_TASK_ACTIONS} from "../../StoreConstants";
import axios from "axios";

export default{
    // i couldnt add this functionality because of time limit
    [LOGOUT_ACTION](context) {
        context.commit(SET_USER_TOKEN_DATA_MUTATION, {
            token: '',
        });
        context.commit(GET_USERID_AFTER_LOGIN, {
            userId: '',
        });
    },
    //deletes tasks
    async [DELETE_TASK_ACTIONS](context,payload) {
        const TaskId = payload.taskId;
        context.commit(LOADING_BAR_SHOW_MUTATION, true,{ root: true });
        const response = await axios.delete(`https://backend1808-56de959b67f4.herokuapp.com/tasks/${TaskId}`);
        context.commit(LOADING_BAR_SHOW_MUTATION, false,{ root: true });
        console.log(response);
    },
    //add tasks
    async [ADD_TASK_ACTION](context,payload) {
        const token = payload.token;
        console.log(payload);
        const postData = {
            title: payload.title,
            description: payload.description,
            isDone: payload.isDone,
        }
        context.commit(LOADING_BAR_SHOW_MUTATION, true,{ root: true });
        const response = await axios.post(`https://backend1808-56de959b67f4.herokuapp.com/tasks/`,postData,{headers: {Authorization: `Bearer ${token}`  }});
        if(response.status === 201) {
            context.commit(GET_TASK_ID_AFTER_ADDING, {
                taskID: response.data._id,
            });
        }
        context.commit(LOADING_BAR_SHOW_MUTATION, false,{ root: true });
        console.log(response);
    },
    //login
    async [LOGIN_ACTION](context, payload) {
        let postData = {
            email: payload.email,
            password: payload.password,
        }
        context.commit(LOADING_BAR_SHOW_MUTATION, true,{ root: true });
        let response = await axios.post('https://backend1808-56de959b67f4.herokuapp.com/auth/login',postData);
        console.log(response);
        if(response.status === 200) {
            context.commit(SET_USER_TOKEN_DATA_MUTATION, {
                token: response.data.token,
            });
            context.commit(GET_USERID_AFTER_LOGIN, {
                userId: response.data.userId,
            });
        }
        console.log(SET_USER_TOKEN_DATA_MUTATION);
        context.commit(LOADING_BAR_SHOW_MUTATION, false,{ root : true });
    },
    //signup
    async [SIGN_UP_ACTION](context, payload) {
        let postData = {
            name: payload.name,
            email: payload.email,
            password: payload.password,
        }
        context.commit(LOADING_BAR_SHOW_MUTATION, true,{ root: true });
        let response = await axios.post('https://backend1808-56de959b67f4.herokuapp.com/auth/signup',postData);
        console.log(response);
        if(response.status === 200) {
            context.commit(SET_USER_TOKEN_DATA_MUTATION, {
                token: response.data.token,
            });
        }
        context.commit(LOADING_BAR_SHOW_MUTATION, false,{ root : true });
    }
};