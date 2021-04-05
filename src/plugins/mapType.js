import Vue from 'vue'
// 图层切换
export default function mapType(){
    return  new Vue.AMap.MapType({
        defaultType:0,
        showRoad:false
    })
}
