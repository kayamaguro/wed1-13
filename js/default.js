var separete_time=function(time){
var sec=time.getSeconds();
var min=time.getMinutes();
var hours=time.getDate();
var month=time.getMonth();
var year=time.getFullyear();
return[sec,min,hours,days,month,year];
}

var now=new Date();
var target= new Date(2020,7,24,0,0,0,0);
var diff= target.getTime()- now.getTime();
var counter= separate_Time(diff);
ElementById('form').select.onchange=function(){
document.getElementById('form').select.value;}
  '東京オリンピックまで…
counter[5]+'年'+
counter[4]+'月'+
counter[3]+'日'+
counter[2]+'時'+
counter[1]+'分'+
counter[0]+'秒';
