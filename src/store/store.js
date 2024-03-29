import { createStore } from "vuex";
import auth from './modules/auth/index';
import { LOADING_BAR_SHOW_MUTATION } from "./StoreConstants";
const store = createStore({
    modules: {
        auth,
    },
    state() {
        return {
            showLoading: false,
        };
    },
    mutations: {
        [LOADING_BAR_SHOW_MUTATION](state,payload) {
            state.showLoading = payload;
        }
    }
});
 
export default store;