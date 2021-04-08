import AMapLoader from '@amap/amap-jsapi-loader';
import {plugins, toolbar, scale, mapType, controlBar} from "../plugins/plugins";
import {INIT_POS} from "./config";
// import {geolcation} from './init'

export function init($el,vue){
    AMapLoader.load({
        "key": "a30d422d821d20fb8e89ef6e05e0404d",              // 申请好的Web端开发者Key，首次调用 load 时必填
        "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        // "AMapUI": {             // 是否加载 AMapUI，缺省不加载
        //     "version": '1.1',   // AMapUI 缺省 1.1
        //     "plugins":[],       // 需要加载的 AMapUI ui插件
        // },
        // "Loca":{                // 是否加载 Loca， 缺省不加载
        //     "version": '1.3.2'  // Loca 版本，缺省 1.3.2
        // },
    }).then((AMap)=>{
        vue.$store.commit("setAMap",AMap)
        initMap($el,vue)
        initPlugins(vue)
    }).catch(e => {
        vue.$log.error(e);
    })
}
function initMap($el,vue){
    let Map = new vue.$store.state.AMap.Map($el, {
                center: INIT_POS,
                layers: [
                    // 默认是交通地图
                    //使用多个图层,也可以后面使用map.add 添加新图层
                    new vue.$store.state.AMap.TileLayer.Satellite(), // 街道地图
                    new vue.$store.state.AMap.TileLayer.RoadNet() // 道路地图
                ],
                // pitch:50,
                viewMode:'3D',
                zoom:15
            })
    vue.$store.commit("setMap",Map)
    vue.$log.debug("Map init success")
}
function initPlugins(vue){
    vue.$store.state.Map.plugin(plugins,function(){
        //异步同时加载多个插件
        mapType(vue)
        // vue.$store.state.Map.addControl();
        vue.$store.state.Map.addControl(toolbar(vue));
        vue.$store.state.Map.addControl(controlBar(vue));
        vue.$store.state.Map.addControl(scale(vue));
        // map.addControl(geolcation(AMap));

        // var mousetool = new AMap.MouseTool(map);
        // 使用鼠标工具，在地图上画标记点
        // mousetool.marker();

    });
    vue.$log.debug("Map plugins init success")
}
