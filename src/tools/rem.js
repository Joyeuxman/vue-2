// 屏幕自适应文字大小 ---因此写样式时，计量单位最好选用rem
(function (doc, win) {
  const htmlEle = doc.documentElement;
  // orientationchange 事件是在用户水平或者垂直翻转设备（即方向发生变化）时触发的事件。
  const resizeEvt = 'orientationonchange' in window ? 'orientationonchange' : 'resize';
  const recalc = () => {
    const clientWidth = htmlEle.clientWidth;
    if (!clientWidth) return;
    htmlEle.style.fontSize = 20 * (clientWidth / 320) + 'px';
  }
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window)