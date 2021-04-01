// 详细配置:https://lbs.amap.com/api/jsapi-v2/documentation
import {createMarkerByPOI} from "./util";
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
    "AMap.AutoComplete",
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
    const toolBar = new AMap.ToolBar({
        offset: [75,25],
        position: 'RB',

    })
    return toolBar;
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
        offset: [50,200],
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
            offset: [80,125],//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: false,        //定位成功后用圆圈表示定位精度范围，默认：true
            noGeoLocation:0,
            panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy:false,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            markerOptions:new AMap.Marker({}),
            circleOptions:new AMap.Circle({})
        }
    )
    geo.getCurrentPosition(function (status,result){
        if(status=="complete"){
            console.log("fixed position seccess!")
        }else {
            alert(result.message)
        }
    })
    return geo;
}

export function autoComplete(AMap,map,keyword){

    const autoComplete = new AMap.AutoComplete({
        // 实例化AutoComplete
        // input 为绑定输入提示功能的input的DOM ID
        input: 'input_id',
        // city:"郑州",
        citylimit:false,
        output:"complete",
     });
    // 无需再手动执行search方法，autoComplete会根据传入input对应的DOM动态触发search
    autoComplete.search(keyword,function (staus,result){
        console.log(result)
        console.log(staus)
    })
    autoComplete.on("select",function(data){
        console.log(data)
        if ( data.poi.location != undefined){
            //定位到中心点
            map.setCenter(data.poi.location);
            // TODO 获取数据，对数据进行操作如：添加marker等
            console.log(data.poi)
            map.add(createMarkerByPOI(AMap,data.poi));
        }
    })
    return autoComplete;
}