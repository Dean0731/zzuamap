
// 放大缩小
export default function toolbar(vue){
    const toolBar = new vue.AMap.ToolBar({
        offset: [75,25],
        position: 'RB',

    })
    return toolBar;
}
