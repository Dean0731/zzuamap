
// 3d旋转
export default function controlBar(vue){
    return new vue.$store.state.AMap.ControlBar({
        offset: [50,200],
        position: 'RB',
    })
}
