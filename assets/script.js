function adjustArticleHeight() {
  var res;
  function articleHeight() {
    const threshold = 696;
    if (window.innerHeight >= threshold) {
      return "32rem";
    }
    const raw = 32 - Math.ceil((threshold - window.innerHeight) / 18);
    if (raw < 20) {
      return "20rem";
    }
    return "" + raw + "rem";
  }
  let article = globalThis.document.getElementsByTagName("article")[0];
  let imgs = globalThis.document.getElementsByTagName("img");
  article.style.height = articleHeight();
  res = [];
  for (let i = 0, items = iter$__6(imgs), len = items.length; i < len; i++) {
    let img = items[i];
    res.push((img.style.height = articleHeight()));
  }
  return res;
}
window.onresize = adjustArticleHeight;
