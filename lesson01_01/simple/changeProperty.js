/**
 * Created by lincimy on 2017/2/8.
 */
var myDiv = document.getElementById("div1");

//变宽函数
var changeWidth = function(){
    myDiv.style.width = "200px";
};

//变高函数
var changeHeight = function(){
    myDiv.style.height = "200px";
};

//变色函数
var changeColor = function(){
    myDiv.style.backgroundColor = "pink";
};

//隐藏函数
var changeHide = function(){
    myDiv.style.display = "none";
};

//重置函数
var cancel = function(){
    myDiv.style.width = "100px";
    myDiv.style.height = "100px";
    myDiv.style.backgroundColor = "black";
    myDiv.style.display = "block";
};