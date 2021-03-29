import AMapLoader from "@amap/amap-jsapi-loader";
let Map = null;
function init($el){
    AMapLoader.load({
            "key": "a30d422d821d20fb8e89ef6e05e0404d",              // 申请好的Web端开发者Key，首次调用 load 时必填
            "version": "1.4.15",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            "AMapUI": {             // 是否加载 AMapUI，缺省不加载
                "version": '1.1',   // AMapUI 缺省 1.1
                "plugins":[],       // 需要加载的 AMapUI ui插件
            },
            "Loca":{                // 是否加载 Loca， 缺省不加载
                "version": '1.3.2'  // Loca 版本，缺省 1.3.2
            }
        }
    ).then((AMap)=>{
        Map = new AMap.Map($el, {
            center: [113.638826,34.742979],
            layers: [//使用多个图层
                new AMap.TileLayer.Satellite(),
                // new AMap.TileLayer.RoadNet()
            ],
            zooms: [4,1000],//设置地图级别范围
            zoom: 50
        });
        Map.on('complete', function(){
            // 地图图块加载完成后触发
            console.log("map complate");
        });
    }).catch(e => {
        console.log(e);
    })
    return Map
}

export default init;
