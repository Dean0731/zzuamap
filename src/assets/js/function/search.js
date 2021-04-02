import { KEY_WEB, URL_POI_SEARCH} from "../config";
import axios from "axios"
import {errorMessage, warnMessage} from "../util/messageUtil";
import {createMarkerByLocation, locationStrToPxPy} from "../util/createMarkerUtil";
export function search(data,vue){
    vue.$log.debug("get sub event")
    let url =  URL_POI_SEARCH+"?key="+KEY_WEB+"&keywords="+data;
    axios.get(url).then(res=>{
        vue.$log.debug("查询结果:",res.data)
        if(res.data.info=="OK"){
            if(res.data.count!=0){
                let dis = res.data.pois[0]
                let location = locationStrToPxPy(dis.location)
                vue.Map.setZoomAndCenter(15,location)
                vue.Map.removeLayer(vue.LabelsLayer)
                vue.LabelsLayer = createMarkerByLocation(vue.AMap,res.data.pois)
                vue.Map.add(vue.LabelsLayer)
                vue.$log.error("show search message in div")
            }else{
                vue.$message(warnMessage('未查询到结果'))
            }
        }else {
            vue.$message(errorMessage('查询失败'))
        }
    })
}
