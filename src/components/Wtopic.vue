<template>
  <div class="Wtopic">
    <Witem father-component="Wtopic" />
  </div>
</template>

<script>
/*
  引用子组件步骤；
  1.import导入组件
  2.为本组件(即父组件)添加components属性
  3.在template便签中直接使用
*/
import Witem from './Witem'

export default {
  name: 'Wtopic',
  components:{
    Witem
  },
  created(){
    // 开始计时
    this.$store.commit('REMBER_TIME');
  }
}
</script>

<style scoped>

</style>
