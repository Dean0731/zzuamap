
// 比例尺
export default function scale(vue){
    return new vue.AMap.Scale( {
        offset: [50,50],
        position: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
    })
}
