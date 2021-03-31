import AMapJS from 'amap-js'
import loader from "./amap";
async function init(){
    const loaderAMapUI = new AMapJS.AMapUILoader({
        version: '1.1'
    });
    await loaderAMapUI.load()
    return loaderAMapUI.AMapUI
}
export default init();


let map = init("app")
this.$log.debug(map)
loader.then((AMap)=>{
    var infoWindow = new AMap.InfoWindow({ //创建信息窗体
        isCustom: true,  //使用自定义窗体
        content:'<div>信息窗体</div>', //信息窗体的内容可以是任意html片段
        offset: new AMap.Pixel(16, -45)
    });
    var marker = new AMap.Marker({
        position: [113.638826, 34.742979]
    })
    AMap.plugin(['AMap.ToolBar','AMap.MapType'],function(){//异步加载插件
        var toolbar = new AMap.ToolBar()
        var mapType = new AMap.MapType()
        map.then(map=>{
            map.addControl(toolbar)
            map.addControl(mapType)
            var onMarkerClick  =  function(e) {
                infoWindow.open(map, e.target.getPosition());//打开信息窗体
                //e.target就是被点击的Marker
            }
            map.add(marker);
            marker.on('click',onMarkerClick);//绑定click事件
        })
    });
})
