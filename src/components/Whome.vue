<template>
  <div class="Whome">
    <Witem father-component="Whome" />
  </div>
</template>

<script>
import Witem from '@/components/Witem'

export default {
  name: 'Whome',
  components: {
    Witem
  },
  data() {
    return {
      msg: '微信小程序主页'
    }
  },
  created(){
    // console.log(this.msg);
  }
}
</script>

<style scoped>

</style>
