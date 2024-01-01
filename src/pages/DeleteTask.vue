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
          <form @submit.prevent="onDelete()">
            <div class="form-group">
              <label>Enter Task Id By copying from Tasks section</label>
              
            <hr />
            <br />
              <input type="text" class="form-control" v-model.trim="taskId" style="text-align: center;"/>
            </div>
            <div class="my-3">
              <button type="submit" class="btn btn-primary">
                  Delete
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
  import { GET_USERID_AFTER_LOGIN, GET_USER_TOKEN_GETTER, DELETE_TASK_ACTIONS } from '@/store/StoreConstants';
      export default {
          data() {
          return {
            taskId:'',
          }
      },
      methods: {
          ...mapActions('auth',{
          delete: DELETE_TASK_ACTIONS
        }),
        createObject() {
            const obj = {
                taskId:this.taskId,
            }
            return obj
        },
          async onDelete() {
              await this.delete( this.createObject() );
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