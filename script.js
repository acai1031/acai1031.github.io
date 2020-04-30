Date.prototype.format = function(fmt){
  var o = {
    "M+" : this.getMonth()+1,                 //月份
    "d+" : this.getDate(),                    //日
    "h+" : this.getHours(),                   //小时
    "m+" : this.getMinutes(),                 //分
    "s+" : this.getSeconds(),                 //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S"  : this.getMilliseconds()             //毫秒
  };

  if(/(y+)/.test(fmt)){
  fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
}

for(var k in o){
  if(new RegExp("("+ k +")").test(fmt)){
    fmt = fmt.replace(
      RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  }
}

  return fmt;
}

document.getElementById("demo1").innerHTML=new Date(79,5,24,11,33,0).format("MM月dd日");

var now = new Date();
var nowStr = now.format("yyyy-MM-dd hh:mm:ss");
document. getElementById("demo2").innerHTML=new Date().format("yyyy年MM月dd日hh小时mm分ss秒");
