<template>
  <div class="Wscore">
    <div class="scores_container">
      <header class="scores">
        <span class="scores_num">{{score}}</span>
        <span class="fenshu">分! </span>
      </header>
      <div class="result_tip">{{scoreTips}}</div>
    </div>
    <div class="share_button" @click="showCover"></div>
    <div class="share_code">
      <header class="share_header">我是Joyeux,请为我点星</header>
      <img src="../images/4-4.png" alt="二维码图片" height="212" width="212" class="code_img">
    </div>
    <div class="share_cover" v-show="showHide" @click="showCover">
      <img src="../images/5-2.png" alt="遮罩图片" class="share_img">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import bgp2 from '../images/4-1.jpg';

export default {
  name: 'Wscore',
  data() {
    return {
      showHide: false,//是否显示遮罩
      score: 0,//分数
      scoreTips: '',//分数提示 
      rightAnswer: [2, 7, 12, 13, 18],//正确答案
      scoreTipsArr: ['凡人', '斗者', '斗师', '斗灵', '斗王', '斗皇']
    }
  },
  computed: mapState(['answerId','allTime']),
  methods: {
    // 计算分数
    computedScore() {
      this.answerId.forEach((item, index) => {
        if (item == this.rightAnswer[index]) {
          this.score += 20;
        }
      })
    },
    // 是否显示分享提示
    showCover() {
      this.showHide = !this.showHide;
    },
    // 根据分数显示提示
    getScoreTip() {
      switch (this.score) {
        case 0:
          this.scoreTips = this.scoreTipsArr[0];
          return;
        case 20:
          this.scoreTips = this.scoreTipsArr[1];
          return;
        case 40:
          this.scoreTips = this.scoreTipsArr[2];
          return;
        case 60:
          this.scoreTips = this.scoreTipsArr[3];
          return;
        case 80:
          this.scoreTips = this.scoreTipsArr[4];
          return;
        case 100:
          this.scoreTips = this.scoreTipsArr[5];
          return;
      }
    }
  },
  created() {
    this.computedScore();
    this.getScoreTip();
    console.log(`总共使用了${this.allTime}秒`);
    document.body.style.background = `url(${bgp2}) center center / 100% 100% no-repeat`
  }
}
</script>

<style lang='less'>
body {
  background: url(../images/4-1.jpg) center center / 100% 100% no-repeat;
  padding-top: 1.2rem;
}

.scores_container {
  position: relative;
  width: 9.7rem;
  height: 9.1rem;
  margin: 0 auto;
  background: url(../images/4-2.png) center center / 100% 100% no-repeat;
  .scores {
    position: absolute;
    top: 4.7rem;
    width: 100%;
    text-indent: 3.3rem;
    font: 900 1.4rem 'Microsoft YaHei'; // 设置或检索对象中的文字的描边
    -webkit-text-stroke: 0.05rem #412318;
    .scores_num {
      font-family: Tahoma, Helvetica, Arial;
      color: #a51d31;
    }
    .fenshu {
      color: #a51d31;
    }
  }
  .result_tip {
    position: absolute;
    top: 7rem;
    left: 0.6rem;
    width: 9rem;
    font-size: 0.65rem;
    text-align: center;
    color: #3e2415;
  }
}

.share_button {
  width: 6.025rem;
  height: 2.4rem;
  margin: 0.8rem auto 0;
  background: url(../images/4-3.png) center center / 5.825rem 100% no-repeat;
}

.share_code {
  width: 5.3rem;
  margin: 1.5rem auto 0;
  .share_header {
    width: 7rem;
    font: 500 0.475rem 'Microsoft YaHei';
    color: #664718;
  }
  .code_img {
    height: 5.3rem;
    width: 5.3rem;
    margin-top: 0.5rem;
  }
}

.share_cover {
  opacity: 0.92;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(../images/5-1.png) center center / 100% 100% no-repeat;
}

.share_img {
  position: fixed;
  top: 0.5rem;
  left: 50%;
  margin-left: -6rem;
  width: 12rem;
  height: 11rem;
}
</style>
