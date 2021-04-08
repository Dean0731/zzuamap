
// 图层切换
export default function mapType(vue,opt){
    if(opt==null){
        opt = {
            defaultType:0,
            showRoad:false,
            showTraffic:false
        }
    }
    let mapType = new vue.$store.state.AMap.MapType(opt)
    if(vue.$store.state.MapType!=null){
        vue.$store.state.MapType.remove()
    }
    mapType.addTo(vue.$store.state.Map)
    mapType.hide()
    vue.$store.commit("setMapType",mapType)
    return mapType;
}
