const idd = window.siyuan.config.appearance.mode;
// 如果是夜间模式
if (idd === 1) {
  const root = document.documentElement;
  root.style.setProperty('--border-is', '2px solid rgb(60, 54, 51)');
  root.style.setProperty('--line-col', 'pink');
  root.style.setProperty('--border-bottom', '1px dashed #FFF');
}
// 如果浅色模式
if (idd === 0) {

}