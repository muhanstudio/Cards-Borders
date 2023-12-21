const idd = window.siyuan.config.appearance.mode;
// 如果是夜间模式
if (idd === 1) {
  const root = document.documentElement;
  root.style.setProperty('--border-is', '1px solid rgb(60, 54, 51)');
  root.style.setProperty('--line-col', 'pink');
  root.style.setProperty('--border-bottom', '1px dashed #FFF');
  root.style.setProperty('--b3-theme-primary', '#727574');
}
// 如果浅色模式
if (idd === 0) {

}

/* REF https://github.com/svchord/Rem-Craft */
/**
 * 获得指定块位于的编辑区
 * @params {HTMLElement}
 * @return {HTMLElement} 光标所在块位于的编辑区
 * @return {null} 光标不在块内
 */
function getTargetEditor(block) {
  while (block != null && !block.classList.contains('protyle-wysiwyg')) block = block.parentElement;
  return block;
}

/**
* 获得焦点所在的块
* @return {HTMLElement} 光标所在块
* @return {null} 光标不在块内
*/
function getFocusedBlock() {
  if (document.activeElement.classList.contains('protyle-wysiwyg')) {
      let block = window.getSelection()?.focusNode?.parentElement; // 当前光标
      while (block != null && block.dataset.nodeId == null) block = block.parentElement;
      return block;
  }
}

function focusHandler() {
  /* 获取当前编辑区 */
  let block = getFocusedBlock(); // 当前光标所在块
  /* 当前块已经设置焦点 */
  if (block?.classList.contains(`block-focus`)) return;

  /* 当前块未设置焦点 */
  const editor = getTargetEditor(block); // 当前光标所在块位于的编辑区
  if (editor) {
      editor.querySelectorAll(`.block-focus`).forEach((element) => element.classList.remove(`block-focus`));
      block.classList.add(`block-focus`);
      // setSelector(block);
  }
}

function bulletMain() {
  // 跟踪当前所在块
  window.addEventListener('mouseup', focusHandler, true);
  window.addEventListener('keyup', focusHandler, true);
}

(async () => {
  bulletMain();
  console.log('加载子弹线成功')
})();
