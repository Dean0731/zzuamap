import loader from "./amap";
async function init($el){
    let map = null;
    await loader.then(AMap=>{
        map = new AMap.Map($el, {
                    center: [113.638826, 34.742979],
                    layers: [//使用多个图层
                        new AMap.TileLayer.Satellite(),
                        new AMap.TileLayer.RoadNet()
                    ],
                    // pitch:50,
                    // viewMode:'3D',
                    zoom:50
                }
            )
        }
    )
    return map;
}
export default init;
