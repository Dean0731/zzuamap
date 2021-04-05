import { KEY_WEB, URL_POI_SEARCH} from "../config/config";
import URLBuilder from "../util/urlUtil"
import Vue from 'vue';
import {errorMessage, warnMessage} from "../util/messageUtil";
import {createMarkerByLocations, locationStrToPxPy} from "../util/createMarkerUtil";
export function search(search){
    let url = new URLBuilder().scheam("https").host(URL_POI_SEARCH).addQuery("key",KEY_WEB).addQuery("offset",6).addQuery("keywords",search.input).builder()
    // addQuery("citylimit",true)
    Vue.axios.get(url).then(res=>{
        if(res.data.status==1){
            if(res.data.count!=0){
                // 更新左侧位置列表
                search.pois = res.data.pois
                // 跳转至目标区域
                let dis = res.data.pois[0]
                let location = locationStrToPxPy(dis.location)
                Vue.Map.setZoomAndCenter(15,location)
                // 添加标记
                Vue.Map.removeLayer(search.LabelsLayer)
                search.LabelsLayer = createMarkerByLocations(vue.AMap,res.data.pois)
                Vue.Map.add(search.LabelsLayer)
            }else{
                Vue.$message(warnMessage('未查询到结果'))
            }
        }else {
            Vue.$message(errorMessage(res.data.info))
        }
    })
}
