var mouseTool = new AMap.MouseTool(map);

function draw(type){
    switch(type){
        case 'rule':{
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
            break;
        }
        case 'measureArea':{
            mouseTool.measureArea({
                strokeColor:'#80d8ff',
                fillColor:'#80d8ff',
                fillOpacity:0.3
                //同 Polygon 的 Option 设置
            });
            break;
        }
    }
}
var radios = document.getElementsByName('func');
for(var i=0;i<radios.length;i+=1){
    radios[i].onchange = function(e){
        draw(e.target.value)
    }
}
draw('rule')

document.getElementById('close').onclick = function(){
    mouseTool.close(true)//关闭，并清除覆盖物
    for(var i=0;i<radios.length;i+=1){
        radios[i].checked = false;
    }
}