import {createMarkerByLocation} from "../util/createMarkerUtil";
import {KEY_WEB, URL_POI_SEARCH} from "../config/config";
import {successMessage} from "../util/messageUtil";
import URLBuilder from "../util/urlUtil";

export default function changeToLocation(search,poi){

    search.Map.removeLayer(search.LabelsLayer)
    // data只有一个 都是有直接坐标的
    if (poi.location !=  ""){
        //定位到中心点
        search.Map.setZoomAndCenter(15,poi.location);
        // TODO 获取数据，对数据进行操作如：添加marker等
        search.LabelsLayer = createMarkerByLocation(search.AMap,poi.location)
        search.Map.add(search.LabelsLayer);
    }else{
        let url = new URLBuilder().
        scheam("https").
        host(URL_POI_SEARCH).
        addQuery("key",KEY_WEB).
        addQuery("offset",1).
        addQuery("keywords",poi.name).builder()
        search.axios.get(url).then(res=>{
            search.Map.setZoomAndCenter(15,res);
            search.$message(successMessage("切换到"+poi.name))
        })
    }
}
