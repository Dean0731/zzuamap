import Vue from 'vue'
// 定位按钮设置
export default function geolcation(){
    const geo = new Vue.AMap.Geolocation(
        {
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            maximumAge: 0,           //定位结果缓存0毫秒，默认：0
            convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true,        //显示定位按钮，默认：true
            position: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
            offset: [80,125],//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: false,        //定位成功后用圆圈表示定位精度范围，默认：true
            noGeoLocation:0,
            panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy:false,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            // markerOptions:new AMap.Marker({}),
            circleOptions:new Vue.AMap.Circle({})
        }
    )
    geo.getCurrentPosition(function (status,result){
        if(status=="complete"){
            Vue.$log.info("fixed position seccess!")
        }else {
            Vue.$log.error(result.message)
        }
    })
    return geo;
}
