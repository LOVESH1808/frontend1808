<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div>
        <div>
          <h3>Add Tasks </h3>
          <hr />
        </div>
        <!-- <div class="alert alert-danger" v-if="error">
          {{ error }}
        </div> -->
        <form @submit.prevent="onAdd()">
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model.trim="title" style="text-wrap: wrap;"/>
          </div>
          <hr />
          <br />
          <div class="form-group">
            <label>Description</label>
            <input type="text" class="form-control" v-model.trim="description" style="text-wrap: wrap;"/>
          </div>
          <hr />
          <br />
          <div class="my-3">
            <button type="submit" class="btn btn-primary">
                Add
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { mapActions, mapGetters} from 'vuex';
import { ADD_TASK_ACTION, GET_USERID_AFTER_LOGIN, GET_USER_TOKEN_GETTER, GET_TASK_ID_AFTER_ADDING } from '@/store/StoreConstants';
    export default {
        data() {
        return {
            title: '',
            description: '',
        }
    },
    methods: {
        ...mapActions('auth',{
        add: ADD_TASK_ACTION
      }),
        createObject() {
            const obj ={
                title:this.title,
                description:this.description,
                isDone:false,
                userId:this.userId,
                token:this.token,
            };
            return obj;
        },
        async onAdd() {
            await this.add(this.createObject());
        },
    },
    computed: {
            ...mapGetters('auth', {
                token: GET_USER_TOKEN_GETTER
            }),
            ...mapGetters('auth', {
                userId: GET_USERID_AFTER_LOGIN
            }),
            
            
    },
    };
</script>