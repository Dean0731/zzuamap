import AMapJS from "amap-js";
import {plugins, toolbar, scale, mapType, controlBar} from "../plugins/plugins";
// import {geolcation} from './init'
export function init(vue){
    new AMapJS.AMapLoader({key: 'a30d422d821d20fb8e89ef6e05e0404d', version: '2.0', plugins: []}).load().then(res=>{
        vue.AMap= res.AMap;
        vue.$log.debug("AMap load success")
        new AMapJS.AMapUILoader({version: '1.1'}).load().then(res=>{
            vue.AMapUI = res.AMapUI
            vue.$log.debug("AMapUI load success")
        })
    })
}
export function initMap($el,vue){
    const map = new vue.AMap.Map($el, {
                center: [113.638826, 34.742979],
                layers: [
                    // 默认是交通地图
                    //使用多个图层,也可以后面使用map.add 添加新图层
                    new vue.AMap.TileLayer.Satellite(), // 街道地图
                    new vue.AMap.TileLayer.RoadNet() // 道路地图
                ],
                // pitch:50,
                viewMode:'3D',
                zoom:10
            })
    vue.$log.debug("Map init success")
    vue.Map = map;
    return map;
}
export  function initPlugins(vue){
    vue.Map.plugin(plugins,function(){
        //异步同时加载多个插件
        vue.Map.addControl(mapType(vue));
        vue.Map.addControl(toolbar(vue));
        vue.Map.addControl(controlBar(vue));
        vue.Map.addControl(scale(vue));
        // map.addControl(geolcation(AMap));

        // var mousetool = new AMap.MouseTool(map);
        // 使用鼠标工具，在地图上画标记点
        // mousetool.marker();

    });
    vue.$log.debug("Map plugins init success")
}
