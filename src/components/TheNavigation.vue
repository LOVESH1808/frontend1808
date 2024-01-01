<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active" v-if="isAuthenticated">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link class="nav-link" to="/login">
            Login
          </router-link>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link class="nav-link" to="/signup">
            Signup
          </router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link class="nav-link" to="/tasks">
            Tasks
          </router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link class="nav-link" to="/add">
            Add Tasks
          </router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link class="nav-link" to="/delete">
            Delete Tasks
          </router-link>
        </li>
        <!-- was trying for logout functionality but couldnt because of time limit -->
        <!-- <li class="nav-item" v-if="isAuthenticated">
                    <a href="#"
                        class="nav-link"
                        @click.prevent="onLogout()"
                        >Logout
                    </a>
        </li> -->
      </ul>
    </div>
  </nav>
</template>
<script>

import {IS_USER_AUTHENTICATE_GETTER, LOGOUT_ACTION} from '../store/StoreConstants';
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters('auth', {
      isAuthenticated :IS_USER_AUTHENTICATE_GETTER
    }),
    ...mapActions('auth', {
      logout: LOGOUT_ACTION
    }),
  },
  methods: {
    
    onLogout() {
      this.logout();
      this.$router.replace('/login');
    }
  }
}
</script>
