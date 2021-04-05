import Vue from 'vue'
// 放大缩小
export default function toolbar(){
    const toolBar = new Vue.AMap.ToolBar({
        offset: [75,25],
        position: 'RB',

    })
    return toolBar;
}
