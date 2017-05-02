/**
 * Created by lincimy on 2017/2/8.
 */
    var myOuter = document.getElementById('outer');
    var myDiv = document.getElementById("div1");

    // 获取窗口宽度
    var getWinWidth = function(){
        var winWidth;
        if (window.innerWidth)
            winWidth = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth))
            winWidth = document.body.clientWidth;
        return winWidth;
    };


    //获取某个样式属性值
    var getStyle = function(ele,styleName){
        if(ele.style[styleName]){ //内联样式
            return ele.style[styleName];
        }
        if(ele.currentStyle){   //ie浏览器
            return ele.currentStyle[styleName];
        }
        if(window.getComputedStyle){  //DOM,例如FireFox浏览器
            return window.getComputedStyle(ele,null)[styleName];
        }
        return null; //其他情况，Safari浏览器
    };

    //获取div元素的原始样式属性值
    var styleObj = {};
    styleObj.outerWidth = getStyle(myOuter,'width');
    styleObj.width = getStyle(myDiv,'width');
    styleObj.height = getStyle(myDiv,'height');
    styleObj.backgroundColor = getStyle(myDiv,'backgroundColor');
    styleObj.display = getStyle(myDiv,'display');

    var widthItem = 50,heightItem = 50;
    //变宽函数
    var changeWidth = function(){
        var divWidth = parseInt(getStyle(myDiv,"width"));
        if(divWidth){
            var winWidth = getWinWidth();
            console.log(winWidth);
            if(divWidth >= 500 && (divWidth + widthItem) <= winWidth){
                myOuter.style.width = divWidth + widthItem + "px";
            }
            myDiv.style.width = divWidth + widthItem + "px";
        }
    };

    //变高函数
    var changeHeight = function(){
        var divHeight = parseInt(getStyle(myDiv,"height"));
        if(divHeight){
            myDiv.style.height = divHeight + heightItem + "px";
        }
    };

    //变色函数
    var changeColor = function(){
        var colorStr = '#';
        for(var i=0;i<6;i++){
            var random = parseInt(Math.random() * 16);
            if(random > 9){
                colorStr += String.fromCharCode(random-10+65);
            }else{
                colorStr += random.toString();
            }
        }
        console.log(colorStr);
        myDiv.style.backgroundColor = colorStr;
    };

    //隐藏函数
    var changeHide = function(){
        var showBtn = document.getElementById('showBtn');
        if(showBtn.value == '隐藏'){
            myDiv.style.display = "none";
            showBtn.value = '显示';
        }else{
            myDiv.style.display = "block";
            showBtn.value = '隐藏';
        }
    };

    //重置函数
    var cancel = function(){
        myDiv.style.width = styleObj.width;
        myDiv.style.height = styleObj.height;
        myDiv.style.backgroundColor = styleObj.backgroundColor;
        myDiv.style.display = styleObj.display;
        myOuter.style.width = styleObj.outerWidth;
    };