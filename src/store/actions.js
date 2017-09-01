export default {
  // 点击下一题，记录答案id,判断是否是最后一题，如果不是则跳转下一题
  addNum({commit,state},id){
    commit('REMBER_ANSWER',id);
    if(state.topicNum < state.topicDetail.length){
      commit('ADD_TOPICNUM',1);
    }
  },
  // 初始化信息
  initializeData({commit}){
    commit('INITIALIZE_DATA');
  }
}