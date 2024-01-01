<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div>
        <div>
          <h3>Login </h3>
          <hr />
        </div>
        <div class="alert alert-danger" v-if="error">
          {{ error }}
        </div>
        <form @submit.prevent="onLogin()">
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" v-model.trim="email"/>
            <div class="error" v-if="errors.email">
                {{ errors.email }}
            </div>
          </div>
          <hr />
          <br />
          <div class="form-group">
            <label>Password</label>
            <input type="text" class="form-control" v-model.trim="password"/>
            <div class="error" v-if="errors.password">
                {{ errors.password }}
            </div>
          </div>
          <hr />
          <br />
          <div class="my-3">
            <button type="submit" class="btn btn-primary">
                Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { LOGIN_ACTION } from '@/store/StoreConstants';
import { mapActions} from 'vuex';
import SignupValidations from '../services/SignupValidation';
export default {
    data() {
        return {
            email: '',
            password: '',
            errors: [],
            error: '',
        }
    },
    methods: {
      ...mapActions('auth',{
        login: LOGIN_ACTION
      }),
         async onLogin() {
            let validations = new SignupValidations(this.email,this.password);
            this.errors = validations.checkValidations();
            if(this.errors.length) {
                return false;
            }
            try {
              await this.login({email: this.email, password:this.password});
            }catch(err) {
              this.error = err;
            }
            this.$router.push('/tasks');
        },
    }
}
</script>
