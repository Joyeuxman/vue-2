<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>{{name}}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Hello',
  data() {
    return {
      msg: 'Welcome to Hello'
    }
  },
  computed: mapState([
    'name'
  ])
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
