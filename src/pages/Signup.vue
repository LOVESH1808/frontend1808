<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div>
        <div>
          <h3>SignUp</h3>
          <hr />
        </div>
        <form @submit.prevent="onSignUp()">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model.trim="name" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" v-model.trim="email" />
            <div class="error" v-if="errors.email">{{ errors.email }}</div>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="text" class="form-control" v-model.trim="password" />
            <div class="error" v-if="errors.password">{{ errors.password }}</div>
          </div>
          <div class="my-3">
            <button type="submit" class="btn btn-primary">Signup</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import SignupValidations from '../services/SignupValidation';
import { mapActions} from 'vuex';
import {SIGN_UP_ACTION} from '../store/StoreConstants';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      errors: []
    }
  },
  methods: {
    ...mapActions('auth',{
      signup: SIGN_UP_ACTION
    }),
    onSignUp() {
      let validations = new SignupValidations(this.email, this.password)
      this.errors = validations.checkValidations()
      if ('email' in this.errors || 'password' in this.errors) {
        return false
      }
      this.signup({ name:this.name , email:this.email , password:this.password });
    }
  }
}
</script>
