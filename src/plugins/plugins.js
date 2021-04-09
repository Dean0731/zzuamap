// 详细配置:https://lbs.amap.com/api/jsapi-v2/documentation
import mapType from "./mapType"
import toolbar from "./toolbar"
import scale from "./scale"
import controlBar from "./controlBar"
import autoComplete from "./autoComplete"
import geolcation from "./geolcation"
export const plugins = [
        'AMap.ToolBar',
        'AMap.MapType',
        'AMap.Scale',
        'AMap.Geolocation',
        "AMap.PlaceSearch",
        "AMap.ControlBar",
        "AMap.MouseTool",
        "AMap.AutoComplete",
]
export {mapType}
export {toolbar}
export {scale}
export {controlBar}
export {autoComplete}
export {geolcation}
