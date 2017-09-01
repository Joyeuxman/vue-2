<template>
  <div class="WeChat">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'WeChat',
  created() {
    console.log('欢迎来到我的第一个微信小程序...')
  }
}
</script>

<style >
</style>
