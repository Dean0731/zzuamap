export function createMarkerByPOI(AMap,poi){
    var labelMarker = new AMap.LabelMarker({
        position: poi.location,
        opacity: 1,
        zIndex: 2,
        icon: {
            image: 'https://a.amap.com/jsapi_demos/static/images/poi-marker.png',
            anchor: 'bottom-center',
            size: [25, 34],
            clipOrigin: [459, 92],
            clipSize: [50, 68]
        },
        text: {
            content: poi.name,
            direction: 'right',
            style: {
                fontSize: 15,
                fillColor: '#fff',
                strokeColor: 'rgba(255,0,0,0.5)',
                strokeWidth: 2,
                padding: [3, 10],
                // backgroundColor: 'yellow',
                borderColor: '#ccc',
                borderWidth: 3,
            }
        }
    });
// 创建一个 LabelsLayer 实例来承载 LabelMarker，[LabelsLayer 文档](https://lbs.amap.com/api/jsapi-v2/documentation#labelslayer)
    var labelsLayer = new AMap.LabelsLayer({
        collision: true,
    });
// 将 LabelMarker 实例添加到 LabelsLayer 上
    labelsLayer.add(labelMarker);
    return labelsLayer;
}