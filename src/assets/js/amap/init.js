import AMapLoader from "@amap/amap-jsapi-loader";
// // import {ref} from 'vue'
//
// function load(){
//     return AMapLoader.load({
//             "key": "a30d422d821d20fb8e89ef6e05e0404d",              // 申请好的Web端开发者Key，首次调用 load 时必填
//             "version": "1.4.15",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
//             "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
//             "AMapUI": {             // 是否加载 AMapUI，缺省不加载
//                 "version": '1.1',   // AMapUI 缺省 1.1
//                 "plugins":[],       // 需要加载的 AMapUI ui插件
//             },
//             "Loca":{                // 是否加载 Loca， 缺省不加载
//                 "version": '1.3.2'  // Loca 版本，缺省 1.3.2
//             }
//         }
//     )
// }
// async function init(){
//     let res = await load();
//     return res;
// }



async function init(){
    const AMap = await AMapLoader.load({
            "key": "a30d422d821d20fb8e89ef6e05e0404d",              // 申请好的Web端开发者Key，首次调用 load 时必填
            "version": "1.4.15",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            "AMapUI": {             // 是否加载 AMapUI，缺省不加载
                "version": '1.1',   // AMapUI 缺省 1.1
                "plugins":[],       // 需要加载的 AMapUI ui插件
            },
            "Loca":{                // 是否加载 Loca， 缺省不加载
                "version": '1.3.2'  // Loca 版本，缺省 1.3.2
            }
        }
    )
    return AMap;
}
console.log(init())
export default 1;
