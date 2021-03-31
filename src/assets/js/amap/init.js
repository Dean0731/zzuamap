import AMapJS from "amap-js";
function init(vue){
    new AMapJS.AMapLoader({key: 'a30d422d821d20fb8e89ef6e05e0404d', version: '1.4.15', plugins: []}).load().then(res=>{
        vue.AMap= res.AMap;
        new AMapJS.AMapUILoader({version: '1.1'}).load().then(res=>vue.AMapUI = res.AMapUI)
    })
}
function initMap($el,AMap){
        return  new AMap.Map($el, {
                    center: [113.638826, 34.742979],
                    layers: [
                        //使用多个图层,也可以后面使用map.add 添加新图层
                        new AMap.TileLayer.Satellite(),
                        new AMap.TileLayer.RoadNet()
                    ],
                    // pitch:50,
                    // viewMode:'3D',
                    zoom:50
                }
                )
}
export default {init,initMap};
