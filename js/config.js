
//測試服务器地址
var apiURL = "http://test.rider.miguatech.com/aomi-rider";
//灰度服务器地址
// var apiURL = "https://test.miguatech.com/aomi-rider";
//綫上服務器地址
// var apiURL = "https://wx.miguatech.com/aomi-rider";
//骑手登录
dispatcherLogin_url = "/RiderUser/v1/dispatcherLogin";
//骑手退出登录
dispatcherLoginOut_url = "/RiderUser/v1/dispatcherLoginOut";
//修改密码
updatePwd_url = "/RiderUser/updatePwd";
//添加编辑骑手
// addAndUpateRider_url = "/RiderUser/v1/addAndUpateRider";
addAndUpateRiderV2_url = "/RiderUser/v2/addAndUpateRider";
//已出餐未指派的订单
getNoAssignOrderList_url = "/dispatcher/getNoAssignOrderList";
//获取已指派的订单
getAssignedOrderList_url = "/dispatcher/getAssignedOrderList";
//获取已接单的订单
getAcceptOrderList_url = "/dispatcher/getAcceptOrderList";
//取货离店
getObtainGoodsOrderList_url = "/dispatcher/getObtainGoodsOrderList";
//上报到店
getArriveStroeOrderList_url = "/dispatcher/getArriveStroeOrderList";
//已到达配送地址的订单列表
getArriveMemberList_url = "/dispatcher/getArriveMemberList";
//获取已完成的订单
getFinishOrderList_url = "/dispatcher/v2/getFinishOrderList";
//获取超时的订单
getTimeOutOrderList_url = "/dispatcher/getTimeOutOrderList";
//获取所有用户订单信息
getAllRiderSituation_url = "/dispatcher/getAllRiderSituation_v2";
//指派订单
assignOrder_url = "/dispatcher/assignOrder";
//获取订单状态统计
getRiderOrderStatesCount_url ="/dispatcher/getRiderOrderStatesCount";
//获取骑手状态统计
RiderOnlineSituation_url ="/dispatcher/obtainRiderOnlineSituation_v2";
//获取骑手列表
obtainAllRiderList_url ="/RiderUser/v1/obtainAllRiderList";
//添加或者修改骑手
addAndUpateRider_url="/RiderUser/v1/addAndUpateRider";
//骑手删除
deleteRider_url="/RiderUser/v1/deleteRider";
//获取骑手用户信息
getRiderInfo_url="/RiderUser/v1/getRiderInfo";
//骑手恢复使用
revertRider_url="/RiderUser/v1/revertRider";
//获取订单详情
getRiderOrderDetail_url ="/dispatcher/getRiderOrderDetail";
//获取骑手调度系统顶部bar信息
getBarInfo_url ="/dispatcher/getBarInfo";
//获取订单所有状态信息
getOrderOptStatus_url="/dispatcher/getOrderOptStatus";
//获取骑手未完成订单
getRiderUnfinish_url = "/dispatcher/getRiderUnfinish";
//获取骑手定位
getRiderLocation_url ="/dispatcher/getRiderLocation";
//骑手修改区域
updateStationId_url ="/RiderUser/updateStationId";
//今日送达到数统计
totalCount_url="/RiderUser/statistic/totalCount";
//获取数据统计列表
searchRiderList_url="/RiderUser/statistic/searchRiderList_v2";
//改派订单的骑手列表
changeRiderUserList_url="/dispatcher/changeRiderUserList";
//改派订单的骑手
changeRiderUser_url="/dispatcher/changeRiderUser";
//获取骑手的订单詳情数据
searchRiderOrder_url="/RiderUser/statistic/searchRiderOrder";
//查询所有异常原因展示
getAllExceptionLib_url="/dispatcher/getAllExceptionLib";
//调度端标记骑手订单异常
markException_url="/dispatcher/markException";
//获取所有的区域划分信息
getAllRiderStation_url="/dispatcher/getAllRiderStation";
//無效單
getTimeOutOrderList_url="/dispatcher/getTimeOutOrderList";
//商家已接单
getStoreAcceptOrderList_url="/dispatcher/getStoreAcceptOrderList";
//修改结算类型
getOptionAccountType_url="/dispatcher/optionAccountType";
//訂單改爲自送訂單
getUpdate2selfsend_url="/dispatcher/update2selfsend";