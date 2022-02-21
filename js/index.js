// 页面重新加载前做判断
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
  if(location.href.match(/\/*pc\.html/i)) {
    location.href = './moblie.html'
  }
} else {
  if(location.href.match(/\/*moblie\.html/i)) {
    location.href = './pc.html'
  }
}