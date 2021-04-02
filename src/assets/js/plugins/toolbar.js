// 放大缩小
export default function toolbar(AMap){
    const toolBar = new AMap.ToolBar({
        offset: [75,25],
        position: 'RB',

    })
    return toolBar;
}
