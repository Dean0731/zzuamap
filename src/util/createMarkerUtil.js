import {SERACH_IMAGE_INDEX} from "../config/config";

export function createMarkerByLocation(AMap,location){
    var labelsLayer = new AMap.LabelsLayer({
        collision: true,
    });
    var labelMarker = new AMap.LabelMarker({
        position: location,
        opacity: 1,
        zIndex: 2,
        icon: {
            image: '/images/poi-marker.png',
            anchor: 'bottom-center',
            size: [25, 34],
            clipOrigin: SERACH_IMAGE_INDEX[21],
            clipSize: [50, 68]
        },
        text: {

        }
    });
    labelsLayer.add(labelMarker);
    return labelsLayer;
}

// export function createMarkerByLocations(AMap,locations){
//     var labelsLayer = new AMap.LabelsLayer({
//         collision: true,
//     });
//     let  k = 0;
//     for(let i=0;i<locations.length;i++){
//         if (locations[i].location==""){
//             break;
//         }
//         var labelMarker = new AMap.LabelMarker({
//             position: locationStrToPxPy(locations[i].location),
//             opacity: 1,
//             zIndex: 2,
//             icon: {
//                 image: '/images/poi-marker.png',
//                 anchor: 'bottom-center',
//                 size: [25, 34],
//                 clipOrigin: SERACH_IMAGE_INDEX[k++],
//                 clipSize: [50, 68]
//             },
//             text: {
//
//             }
//         });
//         // 创建一个 LabelsLayer 实例来承载 LabelMarker，[LabelsLayer 文档](https://lbs.amap.com/api/jsapi-v2/documentation#labelslayer)
//         // 将 LabelMarker 实例添加到 LabelsLayer 上
//         labelsLayer.add(labelMarker);
//     }
//     return labelsLayer;
// }
