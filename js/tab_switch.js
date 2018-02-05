﻿
/*@param
  tab_t:选项卡容器ID
  tab_t_tag:选项卡元素标签
  tab_c:切换内容容器ID
  tab_c_tag:切换内容元素标签
  evt:事件方法--onclick等事件不支持传参
*/
function tab(tab_t,tab_t_tag,tab_c,tag_c_tag,evt){
    var tab_t=document.getElementById(tab_t);
    var tab_t_li=tab_t.getElementsByTagName(tab_t_tag);
    var tab_c=document.getElementById(tab_c);
    var tab_c_li=tab_c.getElementsByTagName(tag_c_tag);
    var len=tab_t_li.length;
    var i=0;
    for(i=0;i<len;i++){
        tab_t_li[i].index=i;
        var fun = function(){
            for(i=0;i<len;i++){
                tab_t_li[i].className='';
                tab_c_li[i].className='hide';
            }
            tab_t_li[this.index].className='act';
            tab_c_li[this.index].className='';
        }
        addEvent(tab_t_li[i],evt,fun);
    }
}
//添加事件通用方法
function addEvent(element,e,fun) {
  //firefox使用addEventListener，来添加事件
  if(element.addEventListener) {
    element.addEventListener(e,fun,false);
  }
  //ie使用attachEvent，来添加事件
  else {
    element.attachEvent("on"+e,fun);
  }
}