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
  '東京オリンピックまで…'
counter[5]+'年'+
counter[4]+'月'+
counter[3]+'日'+
counter[2]+'時'+
counter[1]+'分'+
counter[0]+'秒';

//クッキー
function setCookie(c_name,value,expiredays){
//有効期限
var extime =new Date().getTime();
var cltime =new Date(extime +(60*60*24*1000*expiredays));
var exdate =cltime.touTCString();
//文字列保存
var s="";
s+=c_name+"="+escape(value);
s+=";path="+location.pathname;
if(expiredays){
s+=";expires=";+exdate+";";
}else{
 s+=";";
}
//クッキー保存
  document.cookie=s;
}

//クッキー値
function getCookie(c_name){
var st="";
var ed="";
if(0 < document.cookie.length){
//値取り出し
st=document.cookie.indexOf(c_name+"=";)
if(st!=-1){
st=st+c_name.length+1;
  ed=document.cookie.indexOf(";",st);
  if(ed==-1)ed=document.cookie.substring(st,ed));
}
}
  return"";
}
