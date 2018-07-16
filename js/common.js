/**
 * Created by Administrator on 2016/11/11.
 */
var com = {};

/**** AJAX ��װ ****/
com.ajax = function(url,params,successFun,tipMsg){
    pop.loading(tipMsg ? tipMsg : '������...');
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
            pop.alert('�쳣#' + textStatus);
        }
    });
}

/**
 * �ֻ��Ÿ�ʽ��֤
 * @param mobile
 * @returns
 */
function validateMobile(mobile){
    // �ֻ���Ϊ8λ��11λ
    var mobileRegExp = /^((\d{11})|(\d{8}))$/;
    return mobileRegExp.test(mobile);
}

/**
 * �����ʽ��֤
 * @param email
 * @returns
 */
function validateEmail(email){
    // 1172444100@qq.com �� abc@yahoo.com.cn
    var emailRegExp = /^.+[@].+(\.\w{2,3}){1,2}$/;
    return emailRegExp.test(email);
}

/**
 * ���п�����֤
 * @param cardNo
 * @returns
 */
function validateBankCardNo(cardNo){
    // 19λ��16λ����
    var exp = /^(([1-9]\d{18})|([1-9]\d{15}))$/;
    return exp.test(cardNo);
}


/**
 * �ж��Ƿ���������
 * @param num
 */
function isInteger(num){
    var reg = /^[0-9]*$/;
    return reg.test(num);
}

/**
 * �ж��Ƿ������֣�������С����
 * @param num
 */
function isIntegerOrDecimal(num){
    if(!$.isNumeric(num)){
        return false;
    }
    return true;
}

/**
 * �������6λ�����
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
 * �����ַ������ȣ������������ַ���
 * @returns {String}
 */
function strlen(str){
    var len = 0;
    for (var i=0; i<str.length; i++) {
        var c = str.charCodeAt(i);
        //���ֽڼ�1
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
            len ++;
        }else {
            len += 2;
        }
    }
    return len;
}

/**
 * ʱ����ʱ��Ƚ�
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
 * ��ȡ�Ź�״̬����
 * @param effectFlag
 */
function getGroupPurchaseStateMsg(effectFlag){
    switch(effectFlag){
        case '0' :
            return "�༭��";
            break;
        case '1' :
            return "�����";
            break;
        case '2' :
            return "���̼�ȷ��";
            break;
        case '3' :
            return "������";
            break;
        case '4' :
            return "������";
            break;
    }
}


/**
 * �ж��Ƿ�Ϊ΢�������
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
 * ���ص��������ַ���yyyy-mm-dd
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
 * �������������ַ���yyyy-mm-dd
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
 * ���ر��ܵĵ�һ�������ַ���yyyy-mm-dd
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
 * ���ص��µĵ�һ�������ַ���yyyy-mm-dd
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
 * �������µĵ�һ�������ַ���yyyy-mm-dd
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
 * �������µ����һ�������ַ���yyyy-mm-dd
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
 * �������µ����һ�������ַ���yyyy-mm-dd
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
 * ������ɶ�����֤��
 */
function randomSmsCode(){
    var code = '';
    for(var i = 1 ;i <= 4 ;i++){
        code += parseInt(Math.random() * 10);
    }
    return code;
}

/**
 * �ӿڵ���ǩ���㷨
 * @param userId ����¼��Ϊ�ֻ��ţ�+853-28993355
 ���ýӿ�ʱ��Ա�ţ�8530000001
 milliseconds ��ȡ��ǰʱ����Э������ʱ1970��1��1����ҹ֮���ʱ���ĺ�����
 * @returns
 */
function sign(userId,milliseconds){
    var key = '19BF01E953ED9FB9'; // ˽Կ
    return hex_md5(userId + key + milliseconds);
}


/**
 * wap��Ajax���󹫹�����
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
 * ��ǩ����֤
 * wap��Ajax���󹫹�����
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

//���������������õ���ȷ�ĳ������
//˵����javascript�ĳ�����������������������������ʱ���Ƚ����ԡ�����������ؽ�Ϊ��ȷ�ĳ��������
//���ã�accDiv(arg1,arg2)
//����ֵ��arg1����arg2�ľ�ȷ���
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

//��Number��������һ��div������������������ ���㡣
Number.prototype.div = function (arg){
    return accDiv(this, arg);
}

//�˷������������õ���ȷ�ĳ˷����
//˵����javascript�ĳ˷������������������������˵�ʱ���Ƚ����ԡ�����������ؽ�Ϊ��ȷ�ĳ˷������
//���ã�accMul(arg1,arg2)
//����ֵ��arg1���� arg2�ľ�ȷ���
function accMul(arg1,arg2)
{
    var m=0,s1=arg1.toString(),s2=arg2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}

//��Number��������һ��mul�����������������ӷ��㡣
Number.prototype.mul = function (arg){
    return accMul(arg, this);
}

//�ӷ������������õ���ȷ�ļӷ����
//˵����javascript�ļӷ������������������������ӵ�ʱ���Ƚ����ԡ�����������ؽ�Ϊ��ȷ�ļӷ������
//���ã�accAdd(arg1,arg2)
//����ֵ��arg1����arg2�ľ�ȷ���
function accAdd(arg1,arg2){
    var r1,r2,m;
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2))
    return (arg1*m+arg2*m)/m
}

//��Number��������һ��add�����������������ӷ��㡣
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


