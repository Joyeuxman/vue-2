const ADD_TOPICNUM = 'ADD_TOPICNUM';
const REMBER_ANSWER = 'REMBER_ANSWER';
const REMBER_TIME = 'REMBER_TIME';
const INITIALIZE_DATA = 'INITIALIZE_DATA';

export default {
  // 点击进入下一题
  [ADD_TOPICNUM](state, num) {
    state.topicNum += num;
  },
  // 记录答案
  [REMBER_ANSWER](state, id) {
    state.answerId.push(id);
  },
  // 记录做题时间
  [REMBER_TIME](state) {
    state.timer = setInterval(() => {
      state.allTime++
    }, 1000)
  },
  // 初始化数据信息
  [INITIALIZE_DATA](state){
    state.topicNum = 1;
    state.allTime = 0;
    state.answerId = [];
  }
}
