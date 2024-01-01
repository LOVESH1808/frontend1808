
// const { default: getters } = require("./getters");
// const { default: mutations } = require("./mutations");
// const { default: actions } = require("./actions");
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
    namespaced: true,
    state() {
        return {
            token: '',
            userId: '',
            taskId: '',
        };
    },
    mutations,
    getters,
    actions
}
