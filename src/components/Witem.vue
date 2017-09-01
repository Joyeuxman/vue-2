<template>
  <section>
    <header class="top_tips">
      <span class="num_tips" v-if='fatherComponent == "Whome"'>{{level}}</span>
      <span class="num_tips" v-if='fatherComponent == "Wtopic"'>题目{{topicNum}}</span>
    </header>
    <div v-if='fatherComponent == "Whome"'>
      <div class="home_logo item_container_style"></div>
      <router-link to="WeChat/topic" class="start button_style" />
    </div>
    <div v-if='fatherComponent == "Wtopic"'>
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if='topicDetail.length > 0'>
          <header class="item_title">{{topicDetail[topicNum-1].topic_name}}</header>
          <ul>
            <li class="item_list" v-for="(item,index) in topicDetail[topicNum-1].topic_answer" @click='choosed(index,item.topic_answer_id)'>
              <span class="option_style" :class='{"has_choosed":choosedNum == index}'>{{chooseType(index)}}</span>
              <span class="option_detail">{{item.answer_name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <span class="next_item button_style" @click='nextItem' v-if='topicNum < topicDetail.length'></span>
      <span class="submit_item button_style" @click='submitAnswer' v-else></span>
    </div>
  </section>
</template>

<script>
/*
  父组件向子组件传递属性步骤：
  1.在父组件中给子组件添加属性
  2.在子组件中用props属性来接收
  3.在子组件中使用
*/
import bgp from '../images/1-1.jpg'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Witem',
  data() {
    return {
      choosedNum: null,//选中答案索引
      choosedId: null,//选中答案id
    }
  },
  props: ['fatherComponent'],
  computed: mapState([
    'level',//第几周
    'topicNum',//第几题
    'topicDetail'
  ]),
  methods: {
    // 将vuex中的actions与组件本身的methods进行混合...mapActions
    ...mapActions([
      'addNum','initializeData',
    ]),
    // 选中的答案信息
    choosed(index, id){
      // console.log('是否和箭头函数中的this指向相同，this=====', this);
      // 箭头函数中的this指向该组件本身
      // 不是箭头函数中的this指向该组件实例化后的对象
      this.choosedNum = index;
      this.choosedId = id;
    },
    // 将索引0-3转化为答案A-D
    chooseType: index => {
      switch (index) {
        case 0: return 'A';
        case 1: return 'B';
        case 2: return 'C';
        case 3: return 'D';
      }
    },
    // 点击下一题
    nextItem(){
      if(this.choosedNum !== null){
        this.choosedNum = null;
        this.addNum(this.choosedId);
      }else{
        alert('您还没有选择答案哦');
      }
    },
    // 到达最后一题，交卷，清空定时器，跳转分数页面
    submitAnswer(){
      if(this.choosedNum !== null){
        this.addNum(this.choosedId);
        clearInterval(this.timer);
        this.$router.push('score');
      }else{
        alert('您还没有选择答案哦');
      }
    }
  },
  created() {
    this.initializeData();
    // ???难点2 在组件中直接引用图片资源
    // 1.根据相对路径通过import导入
    // 2.通过下行代码来使用
    document.body.style.background = `url(${bgp}) center center / 100% 100% no-repeat`;
    // document.body.style.background = 'url(' + bgp + ')';
    console.log('document.body.style.background===',document.body.style.background)
    
  }
}
</script>

<style lang="less">
.top_tips {
  z-index: 10;
  position: absolute;
  top: -1.3rem;
  right: 1.6rem;
  height: 7.35rem;
  width: 3.25rem; // background-image background-position / background-size background-repeat
  background: url(../images/WeChatIMG2.png) center center / 100% 100% no-repeat;
  .num_tips {
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    height: 0.7rem;
    width: 2.5rem; // [font-weight] font-size font-family
    font: 600 0.6rem '黑体';
    text-align: center;
    color: #a57c50;
  }
}

.item_container_style {
  position: absolute;
  top: 4.1rem;
  left: 1rem;
  height: 11.625rem;
  width: 13.15rem;
}

.home_logo {
  background: url(../images/1-2.png) right center / 13.142rem 100% no-repeat;
}

.start {
  background: url(../images/1-4.png) center center / 100% 100% no-repeat;
}

.button_style {
  display: block;
  position: absolute;
  top: 16.5rem;
  left: 50%;
  height: 2.1rem;
  width: 4.4rem;
  margin-left: -2.2rem;
}

.item_back {
  background: url('../images/2-1.png') center center / 100% 100% no-repeat;
}

.item_list_container {
  position: absolute;
  top: 2.4rem;
  left: 3rem;
  height: 7.0rem;
  width: 8.0rem; // -webkit-font-smoothing 属性 字体平滑,该属性定义文本的平滑属性
  // none 	不平滑，字体具有锯齿锋利边缘，适用于小像素的文本。
  // subpixel-antialiased 	使用亚像素平滑。
  // antialiased 	使用灰阶平滑。
  // 效果并不明显???
  -webkit-font-smoothing: antialiased;
}

.item_title {
  font-style: 0.65rem;
  line-height: 0.7rem;
  color: #fff;
}

.item_list {
  width: 10rem;
  margin-top: 0.4rem;
  font-size: 0;
  span {
    display: inline-block;
    vertical-align: middle;
    color: #fff;
  }
}

.option_style {
  height: 0.7rem;
  width: 0.7rem;
  border-radius: 50%;
  border: 1px solid #fff;
  line-height: 0.7rem;
  margin-right: 0.3rem;
  text-align: center;
  font: 0.5rem 'Arial';
}

.option_detail {
  width: 7.5rem;
  padding-top: 0.1rem;
  font-size: 0.6rem;
}

.item_list .has_choosed {
  background-color: #ffd400;
  color: #575757;
  border-color: #ffd400;
}
.next_item{
  background: url('../images/2-2.png') center center / 100% 100% no-repeat;
}
.submit_item{
  background: url('../images/3-1.png') center center / 100% 100% no-repeat;
}
</style>


