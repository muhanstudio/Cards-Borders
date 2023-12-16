const idd = window.siyuan.config.appearance.mode;

if (idd === 0) {
  const root = document.documentElement;
  root.style.setProperty('--border-is', '2px solid black');
}
if (idd === 1) {
    const root = document.documentElement;
    root.style.setProperty('--line-col', 'pink');
}