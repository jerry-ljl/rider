/**
 * Created by Administrator on 2016/11/11.
 */
var com = {};

/**** AJAX 封装 ****/
com.ajax = function(url,params,successFun,tipMsg){
    pop.loading(tipMsg ? tipMsg : '保存中...');
    $.ajax({
        url : url,
        data : params,
        type : 'post',
        cache : false,
        success : function(response){
            pop.close();
            $.isFunction(successFun) ? successFun(response) : void(0);
        },
        error : function(XMLHttpRequest, textStatus, errorThrown){
            pop.close();
            pop.alert('异常#' + textStatus);
        }
    });
}

/**
 * 手机号格式验证
 * @param mobile
 * @returns
 */
function validateMobile(mobile){
    // 手机号为8位或11位
    var mobileRegExp = /^((\d{11})|(\d{8}))$/;
    return mobileRegExp.test(mobile);
}

/**
 * 邮箱格式验证
 * @param email
 * @returns
 */
function validateEmail(email){
    // 1172444100@qq.com 、 abc@yahoo.com.cn
    var emailRegExp = /^.+[@].+(\.\w{2,3}){1,2}$/;
    return emailRegExp.test(email);
}

/**
 * 银行卡号验证
 * @param cardNo
 * @returns
 */
function validateBankCardNo(cardNo){
    // 19位、16位数字
    var exp = /^(([1-9]\d{18})|([1-9]\d{15}))$/;
    return exp.test(cardNo);
}


/**
 * 判断是否是正整数
 * @param num
 */
function isInteger(num){
    var reg = /^[0-9]*$/;
    return reg.test(num);
}

/**
 * 判断是否是数字（整数和小数）
 * @param num
 */
function isIntegerOrDecimal(num){
    if(!$.isNumeric(num)){
        return false;
    }
    return true;
}

/**
 * 随机生成6位随机数
 * @returns {String}
 */
function mathRand(){
    var Num="";
    for(var i=0;i<6;i++){
        Num += Math.floor(Math.random()*10);
    }
    return Num;
}

/**
 * 计算字符串长度（汉字算两个字符）
 * @returns {String}
 */
function strlen(str){
    var len = 0;
    for (var i=0; i<str.length; i++) {
        var c = str.charCodeAt(i);
        //单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
            len ++;
        }else {
            len += 2;
        }
    }
    return len;
}

/**
 * 时分秒时间比较
 * @param t1 HH:mm:ss
 * @param t2 HH:mm:ss
 * @returns {Boolean}
 */
function compareTime(t1, t2) {
    var a = '01/10/2007 ' + t1;
    var b = '01/10/2007 ' + t2;
    var d = new Date(a);
    var e = new Date(b);
    if (t1 > t2) {
        return false;
    } else {
        return true;
    }
}


/**
 * 获取团购状态描述
 * @param effectFlag
 */
function getGroupPurchaseStateMsg(effectFlag){
    switch(effectFlag){
        case '0' :
            return "编辑中";
            break;
        case '1' :
            return "待审核";
            break;
        case '2' :
            return "待商家确认";
            break;
        case '3' :
            return "售卖中";
            break;
        case '4' :
            return "已下线";
            break;
    }
}


/**
 * 判断是否为微信浏览器
 * @returns {Boolean}
 */
function isWeixinBrowser(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    }else{
        return false;
    }
}

/**
 * 返回当天日期字符串yyyy-mm-dd
 * @returns {String}
 */
function getTodayStr(){
    var today = new Date();
    var month = today.getMonth() + 1;
    var strDate = today.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    return today.getFullYear() + '-' + month + '-' + strDate;
}

/**
 * 返回昨天日期字符串yyyy-mm-dd
 * @returns {String}
 */
function getYesterdayStr(){
    var yesterday = new Date(new Date().getTime() - (1000 * 60 * 60 * 24));
    var month = yesterday.getMonth() + 1;
    var strDate = yesterday.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    return yesterday.getFullYear() + '-' + month + '-' + strDate;
}

/**
 * 返回本周的第一天日期字符串yyyy-mm-dd
 * @returns {String}
 */
function getFirstDateOfCurrWeek(){
    var today = new Date();
    var week = "6012345";
    var differ = Math.abs(0 - week.substr(today.getDay(),1));

    var differDate = new Date(today.getTime() - (1000 * 60 * 60 * 24 * differ));
    var month = differDate.getMonth() + 1;
    var strDate = differDate.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    return differDate.getFullYear() + '-' + month + '-' + strDate;
}

/**
 * 返回当月的第一天日期字符串yyyy-mm-dd
 * @returns {String}
 */
function getFirstDateOfCurrMonth(){
    var today = new Date();
    var month = today.getMonth() + 1;
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    return today.getFullYear() + '-' + month + '-' + '01';
}

/**
 * 返回上月的第一天日期字符串yyyy-mm-dd
 * @returns {String}
 */
function getFirstDateOfPrevMonth(){
    var today = new Date();
    var month = today.getMonth();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    return today.getFullYear() + '-' + month + '-' + '01';
}

/**
 * 返回上月的最后一天日期字符串yyyy-mm-dd
 * @returns {String}
 */
function getLastDateOfPrevMonth(){
    var today = new Date();
    var year = today.getFullYear();
    var prevMonth = today.getMonth();
    var lastDateOfPrevMonth = new Date(year,prevMonth,0);

    var month = lastDateOfPrevMonth.getMonth() + 1;
    var strDate = lastDateOfPrevMonth.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    return lastDateOfPrevMonth.getFullYear() + '-' + month + '-' + strDate;
}


/**
 * 返回下月的最后一天日期字符串yyyy-mm-dd
 * @returns {String}
 */
function getLastDateOfNextMonth(){
    var today = new Date();
    var year = today.getFullYear();
    var nextMonth = today.getMonth() + 2;
    var lastDateOfNextMonth = new Date(year,nextMonth,0);

    var month = lastDateOfNextMonth.getMonth() + 1;
    var strDate = lastDateOfNextMonth.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    return lastDateOfNextMonth.getFullYear() + '-' + month + '-' + strDate;
}


/**
 * 随机生成短信验证码
 */
function randomSmsCode(){
    var code = '';
    for(var i = 1 ;i <= 4 ;i++){
        code += parseInt(Math.random() * 10);
    }
    return code;
}

/**
 * 接口调用签名算法
 * @param userId ：登录数为手机号：+853-28993355
 调用接口时会员号：8530000001
 milliseconds ：取当前时间与协调世界时1970年1月1日午夜之间的时间差的毫秒数
 * @returns
 */
function sign(userId,milliseconds){
    var key = '19BF01E953ED9FB9'; // 私钥
    return hex_md5(userId + key + milliseconds);
}


/**
 * wap端Ajax请求公共方法
 *
 * @returns
 */
com.ajaxForWap = function(url,data,headers,successFun,errorFun){
    if(!headers){
        headers = {};
    }
    headers['lanType'] = localStorage.getItem('languageFlag');
    $.ajax({
        url : url,
        data : data,
        headers : headers,
        type : 'post',
        cache : false,
        success : function(response){
            $.isFunction(successFun) ? successFun(response) : void(0);
        },
        error : function(XMLHttpRequest, textStatus, errorThrown){
            $.isFunction(errorFun) ? errorFun() : void(0);
        }
    });
}

/**
 * 带签名验证
 * wap端Ajax请求公共方法
 *
 * @returns
 */
com.ajaxForWapWithSign = function(url,data,successFun,errorFun){
    var headers = {};
    var defaultUserId = data['userId'];
    var milliseconds = new Date().getTime();
    headers['userId'] = defaultUserId;
    headers['time'] = milliseconds;
    headers['sign'] = sign(defaultUserId,milliseconds);
    headers['lanType'] = localStorage.getItem('languageFlag');
    $.ajax({
        url : url,
        data : data,
        headers : headers,
        type : 'post',
        cache : false,
        success : function(response){
            response = $.parseJSON(response);
            $.isFunction(successFun) ? successFun(response) : void(0);
        },
        error : function(XMLHttpRequest, textStatus, errorThrown){
            $.isFunction(errorFun) ? errorFun() : void(0);
        }
    });
}

//除法函数，用来得到精确的除法结果
//说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
//调用：accDiv(arg1,arg2)
//返回值：arg1除以arg2的精确结果
function accDiv(arg1,arg2){
    var t1=0,t2=0,r1,r2;
    try{t1=arg1.toString().split(".")[1].length}catch(e){}
    try{t2=arg2.toString().split(".")[1].length}catch(e){}
    with(Math){
        r1=Number(arg1.toString().replace(".",""))
        r2=Number(arg2.toString().replace(".",""))
        return (r1/r2)*pow(10,t2-t1);
    }
}

//给Number类型增加一个div方法，调用起来更加 方便。
Number.prototype.div = function (arg){
    return accDiv(this, arg);
}

//乘法函数，用来得到精确的乘法结果
//说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
//调用：accMul(arg1,arg2)
//返回值：arg1乘以 arg2的精确结果
function accMul(arg1,arg2)
{
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}

//给Number类型增加一个mul方法，调用起来更加方便。
Number.prototype.mul = function (arg){
    return accMul(arg, this);
}

//加法函数，用来得到精确的加法结果
//说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
//调用：accAdd(arg1,arg2)
//返回值：arg1加上arg2的精确结果
function accAdd(arg1,arg2){
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2))
    return (arg1*m+arg2*m)/m
}

//给Number类型增加一个add方法，调用起来更加方便。
Number.prototype.add = function (arg){
    return accAdd(arg,this);
}

com.toast=function(message){
    $.toast({
        text: message,
        heading: '',
        showHideTransition: 'fade',
        allowToastClose: true,
        hideAfter: 2000,
        stack: false,
        position:{ 'left' : 'auto', 'right' : '400px', 'top' : '350px', 'bottom' : 'auto' },
        bgColor: '#444444',
        textColor: '#eeeeee',
        textAlign: 'center',
        loader: false,
        loaderBg: '#9EC600'
    });
}


