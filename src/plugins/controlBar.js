import Vue from 'vue'
// 3d旋转
export default function controlBar(){
    return new Vue.AMap.ControlBar({
        offset: [50,200],
        position: 'RB',
    })
}
