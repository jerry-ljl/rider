var CommonBase = function(){

	var baseurl  = apiURL;

	var _requestToken = function(action,parameter,callback,beforeSendFunction,completeFunction,careBusinessException,careLogin){
		var ajaxurl = baseurl + action;
		$.ajax({
			//地址格式
			url: ajaxurl,
			type: 'get',
			dataType: 'json',
			xhrFields: {
				withCredentials: true
			},
			contentType: "application/json;charset=UTF-8",
			cache: 'false',
			data: {
				dispatcherRefreshToken:localStorage.getItem("dispatcherRefreshToken"),
				channel:9
			},
			scriptCharset: 'utf-8',
			beforeSend: function (xhr) {
                if(beforeSendFunction){
                	beforeSendFunction(xhr);
                }
            },
			success: function(jsonstr) {
				if (jsonstr.resultCode == "0") {
                    localStorage.setItem("dispatcherToken",jsonstr.detailMsg.dispatcherToken);
				} else {
					parent.location.href ="login.html";
					return;
				}
			},
			complete:function(){
				if(completeFunction){
					completeFunction();
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
			}
		});
	};
	var _request = function(action,parameter,callback,beforeSendFunction,completeFunction,careBusinessException,careLogin){
		var ajaxurl = baseurl + action;
		$.ajax({
			//地址格式
			url: ajaxurl,
			type: 'get',
			dataType: 'json',
			xhrFields: {
				withCredentials: true
			},
			contentType: "application/json;charset=UTF-8",
			cache: 'false',
			data: parameter,
			scriptCharset: 'utf-8',
			beforeSend: function (xhr) {
                xhr.setRequestHeader("dispatcherToken",sessionStorage.getItem("dispatcherToken"));
                xhr.setRequestHeader("channel","9");
                if(beforeSendFunction){
                	beforeSendFunction(xhr);
                }
            },
			success: function(jsonstr) {
				if (jsonstr.resultCode == "0") {
					callback(jsonstr);
				}else if(jsonstr.resultCode == "401"){
					if(careLogin){
						careLogin();
					}else{
						var param = {

						};
						_requestToken("/RiderUser/getAccessTokenByDispatcherRefreshToken",param);
					}
				} else {
					if(careBusinessException){
						careBusinessException(jsonstr);
					}else{
						alert(jsonstr.businessMsg.businessNote+"("+jsonstr.businessMsg.businessCode+")");
					}
				}
			},
			complete:function(){
				if(completeFunction){
					completeFunction();
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
                console.log(JSON.stringify(jqXHR) + "," + textStatus + "," + errorThrown);
			}
		});
	};


	return {
		request: function(action,parameter,callback,beforeSendFunction,completeFunction,careBusinessException,careLogin) {
			return _request(action,parameter,callback,beforeSendFunction,completeFunction,careBusinessException,careLogin);
		}
	};
}();