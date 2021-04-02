import { KEY_WEB, URL_POI_SEARCH} from "../config";
import URLBuilder from "../util/urlUtil"
import axios from "axios"
import {errorMessage, warnMessage} from "../util/messageUtil";
import {createMarkerByLocations, locationStrToPxPy} from "../util/createMarkerUtil";
export function search(vue,search){
    let url = new URLBuilder().scheam("https").host(URL_POI_SEARCH).addQuery("key",KEY_WEB).addQuery("offset",6).addQuery("keywords",search.input).builder()
    // addQuery("citylimit",true)
    axios.get(url).then(res=>{
        if(res.data.status==1){
            if(res.data.count!=0){
                // 更新左侧位置列表
                search.pois = res.data.pois

                // 跳转至目标区域
                let dis = res.data.pois[0]
                let location = locationStrToPxPy(dis.location)
                vue.Map.setZoomAndCenter(15,location)
                // 添加标记
                vue.Map.removeLayer(search.LabelsLayer)
                search.LabelsLayer = createMarkerByLocations(vue.AMap,res.data.pois)
                vue.Map.add(search.LabelsLayer)
            }else{
                vue.$message(warnMessage('未查询到结果'))
            }
        }else {
            vue.$message(errorMessage(res.data.info))
        }
    })
}
