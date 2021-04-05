import AMapJS from "amap-js";
import Vue from 'vue'

import {plugins, toolbar, scale, mapType, controlBar} from "../plugins/plugins";
// import {geolcation} from './init'
export function init($el){
    new AMapJS.AMapLoader({key: 'a30d422d821d20fb8e89ef6e05e0404d', version: '2.0', plugins: []}).load().then(res=>{
        Vue.prototype.$AMap= res.AMap;
        Vue.$log.debug(Vue.AMap,res.AMap)
        Vue.$log.debug("AMap load success")
        new AMapJS.AMapUILoader({version: '1.1'}).load().then(res=>{
            Vue.prototype.AMapUI = res.AMapUI
            Vue.$log.debug("AMapUI load success")
            initMap($el)
            initPlugins()
        })
    })
}
function initMap($el){
    Vue.prototype.Map = new Vue.AMap.Map($el, {
                center: [113.638826, 34.742979],
                layers: [
                    // 默认是交通地图
                    //使用多个图层,也可以后面使用map.add 添加新图层
                    new Vue.AMap.TileLayer.Satellite(), // 街道地图
                    new Vue.AMap.TileLayer.RoadNet() // 道路地图
                ],
                // pitch:50,
                viewMode:'3D',
                zoom:10
            })
    Vue.$log.debug("Map init success")
}
function initPlugins(){
    Vue.Map.plugin(plugins,function(){
        //异步同时加载多个插件
        Vue.Map.addControl(mapType());
        Vue.Map.addControl(toolbar());
        Vue.Map.addControl(controlBar());
        Vue.Map.addControl(scale());
        // map.addControl(geolcation(AMap));

        // var mousetool = new AMap.MouseTool(map);
        // 使用鼠标工具，在地图上画标记点
        // mousetool.marker();

    });
    Vue.$log.debug("Map plugins init success")
}
