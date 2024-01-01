<template>
    <div>
      <h2>Task page</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>IsDone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task._id" >
            <td>{{ task._id }}</td>
            <td style="text-wrap: balance;">{{ task.title }}</td>
            <td style="text-wrap: balance;">{{ task.description }}</td>
            <td>{{ task.isDone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
<script>
import axios from 'axios';
import { mapGetters} from 'vuex';
import { GET_USER_TOKEN_GETTER, GET_USERID_AFTER_LOGIN } from '../store/StoreConstants';
    export default {
        data() {
            return {
                tasks:[]
            };
        },
        computed: {
            ...mapGetters('auth', {
                token: GET_USER_TOKEN_GETTER
            }),
            ...mapGetters('auth', {
                userId: GET_USERID_AFTER_LOGIN
            })
            
        },
        mounted() {
            // const token= GET_USER_TOKEN_GETTER;
            axios.get(`https://backend1808-56de959b67f4.herokuapp.com/tasks/${this.userId}`,{headers: {Authorization: `Bearer ${this.token}`  }}).then(response => {
                this.formatTask(response.data);
            })
        },
        methods: {
            formatTask(task) {
                for(let key in task) {
                    this.tasks.push({...task[key], id:key});
                }
            }
        }
    };
</script>
<style scoped>
</style>