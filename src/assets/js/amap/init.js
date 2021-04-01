import AMapJS from "amap-js";
import {plugins, toolbar, geolcation, scale, mapType, controlBar} from "./config";

export function init(vue){
    new AMapJS.AMapLoader({key: 'a30d422d821d20fb8e89ef6e05e0404d', version: '2.0', plugins: []}).load().then(res=>{
        vue.AMap= res.AMap;
        new AMapJS.AMapUILoader({version: '1.1'}).load().then(res=>vue.AMapUI = res.AMapUI)
    })
}
export function initMap($el,AMap){
    const map = new AMap.Map($el, {
                center: [113.638826, 34.742979],
                layers: [
                    // 默认是交通地图
                    //使用多个图层,也可以后面使用map.add 添加新图层
                    new AMap.TileLayer.Satellite(), // 街道地图
                    new AMap.TileLayer.RoadNet() // 道路地图
                ],
                // pitch:50,
                viewMode:'3D',
                zoom:15
            })
    map.plugin(plugins,function(){
        //异步同时加载多个插件
        map.addControl(mapType(AMap));
        map.addControl(toolbar(AMap));
        map.addControl(controlBar(AMap));
        map.addControl(scale(AMap));
        map.addControl(geolcation(AMap));

        // var mousetool = new AMap.MouseTool(map);
        // 使用鼠标工具，在地图上画标记点
        // mousetool.marker();

    });
}