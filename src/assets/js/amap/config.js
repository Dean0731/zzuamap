// 详细配置:https://lbs.amap.com/api/jsapi-v2/documentation

export const plugins = [
    'AMap.ToolBar',
        'AMap.MapType',
        'AMap.Scale',
        'AMap.Geolocation',
        "AMap.HawkEye",
        "AMap.PlaceSearch",
        "AMap.ControlBar",
    "AMap.AdvancedInfoWindow",
    "AMap.MouseTool",
]
// 图层切换
export function mapType(AMap){
    return  new AMap.MapType({
        defaultType:0,
        showRoad:false
    })
}

// 放大缩小
export function toolbar(AMap){
    return new AMap.ToolBar({
        offset: [75,25],
        position: 'RB',

    })
}
// 比例尺
export function scale(AMap){
    return new AMap.Scale( {
        offset: [50,50],
        position: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
    })
}
// 3d旋转
export function controlBar(AMap){
    return new AMap.ControlBar({
        offset: [50,150],
        position: 'RB',
    })
}

// 定位按钮设置
export function geolcation(AMap){
    const geo = new AMap.Geolocation(
        {
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            maximumAge: 0,           //定位结果缓存0毫秒，默认：0
            convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true,        //显示定位按钮，默认：true
            position: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
            offset: [75,100],//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
            noGeoLocation:0,
            panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy:false,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            markerOptions:new AMap.Marker({}),
            circleOptions:new AMap.Circle({})
        }
    )
    geo.getCurrentPosition(function (status,result){
        if(status=="complete"){
            console.log(result.position)
        }else {
            alert(result.message)
        }
    })
    return geo;
}
