import {SERACH_IMAGE_INDEX} from "../config";

export function locationStrToPxPy(locationstr){
    let px_py = locationstr.split(",")
    let ret = []
    for (let i=0;i<px_py.length;i++){
        ret.push(Number(px_py[i]))
    }
    return ret;
}
export function createMarkerByPOI(AMap,poi){
    var labelMarker = new AMap.LabelMarker({
        position: poi.location,
        opacity: 1,
        zIndex: 2,
        icon: {
            image: '/images/poi-marker.png',
            anchor: 'bottom-center',
            size: [25, 34],
            clipOrigin: [280, 6],
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

export function createMarkerByLocation(AMap,locations){
    var labelsLayer = new AMap.LabelsLayer({
        collision: true,
    });
    let  k = 0;
    for(let i=0;i<locations.length;i++){
        if(locations[i].parent!=[]){
            var labelMarker = new AMap.LabelMarker({
                position: locationStrToPxPy(locations[i].location),
                opacity: 1,
                zIndex: 2,
                icon: {
                    image: '/images/poi-marker.png',
                    anchor: 'bottom-center',
                    size: [25, 34],
                    clipOrigin: SERACH_IMAGE_INDEX[k++],
                    clipSize: [50, 68]
                },
                text: {

                }
            });
            // 创建一个 LabelsLayer 实例来承载 LabelMarker，[LabelsLayer 文档](https://lbs.amap.com/api/jsapi-v2/documentation#labelslayer)
            // 将 LabelMarker 实例添加到 LabelsLayer 上
            labelsLayer.add(labelMarker);
        }
    }
    return labelsLayer;
}
