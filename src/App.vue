<script>
import TheNavigation from './components/TheNavigation.vue';
import TheLoader from './components/TheLoader.vue';
import { mapState } from 'vuex';
export default {
    name: 'App',
    computed: {
      ...mapState({
        showLoading: state => state.showLoading
      })
    },
    components: { TheNavigation, TheLoader }
}
</script>

<template>
  <TheNavigation />
  <the-loader v-if="showLoading"></the-loader>
  <div class = 'container'>
    <div class="row">
      <div class="col-mid-12">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>

</template>

<style >
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
