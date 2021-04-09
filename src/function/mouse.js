export function rule(vue){
    let AMap = vue.$store.state.AMap;
    let map = vue.$store.state.Map;
    let mouseTool
    if(vue.mouseTool==null){
        mouseTool = new AMap.MouseTool(map);
    }else {
        mouseTool = vue.mouseTool;
    }
    mouseTool.rule({
        startMarkerOptions : {//可缺省
            icon: new AMap.Icon({
                size: new AMap.Size(19, 31),//图标大小
                imageSize:new AMap.Size(19, 31),
                image: "//webapi.amap.com/theme/v1.3/markers/b/start.png"
            }),
            offset: new AMap.Pixel(-9, -31)
        },
        endMarkerOptions : {//可缺省
            icon: new AMap.Icon({
                size: new AMap.Size(19, 31),//图标大小
                imageSize:new AMap.Size(19, 31),
                image: "//webapi.amap.com/theme/v1.3/markers/b/end.png"
            }),
            offset: new AMap.Pixel(-9, -31)
        },
        midMarkerOptions : {//可缺省
            icon: new AMap.Icon({
                size: new AMap.Size(19, 31),//图标大小
                imageSize:new AMap.Size(19, 31),
                image: "//webapi.amap.com/theme/v1.3/markers/b/mid.png"
            }),
            offset: new AMap.Pixel(-9, -31)
        },
        lineOptions : {//可缺省
            strokeStyle: "solid",
            strokeColor: "#FF33FF",
            strokeOpacity: 1,
            strokeWeight: 2
        }
        //同 RangingTool 的 自定义 设置，缺省为默认样式
    });
    vue.mouseTool = mouseTool;
}
export function measureArea(vue){
    let AMap = vue.$store.state.AMap;
    let map = vue.$store.state.Map;
    let mouseTool
    if(vue.mouseTool==null){
        mouseTool = new AMap.MouseTool(map);
    }else {
        mouseTool = vue.mouseTool;
    }
    mouseTool.measureArea({
        strokeColor:'#d4625f',
        strokeWeight:4,
        fillColor:'#d4625f',
        fillOpacity:0.3
        //同 Polygon 的 Option 设置
    });
    vue.mouseTool = mouseTool
}
