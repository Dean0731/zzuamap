import {createMarkerByLocation} from "../util/createMarkerUtil";
import axios from "axios";
import {KEY_WEB, URL_POI_SEARCH} from "../config";
import {successMessage} from "../util/messageUtil";
import URLBuilder from "../util/urlUtil";
export default function autoComplete(vue,search){
    const autoComplete = new vue.AMap.AutoComplete({
        // 实例化AutoComplete
        // input 为绑定输入提示功能的input的DOM ID
        input: 'input_id',
        // city:"郑州",
        citylimit:false,
        output:"complete",
    });
    //无需再手动执行search方法，autoComplete会根据传入input对应的DOM动态触发search
    autoComplete.on("select",function(data){
        changeToLocation(vue,search,data.poi)
    })
    vue.$log.debug("autocomplete load end!")
    return autoComplete;
}

export function changeToLocation(vue,search,poi){

    vue.Map.removeLayer(search.LabelsLayer)
    // data只有一个 都是有直接坐标的
    if (poi.location !=  ""){
        //定位到中心点
        vue.Map.setZoomAndCenter(15,poi.location);
        // TODO 获取数据，对数据进行操作如：添加marker等
        search.LabelsLayer = createMarkerByLocation(vue.AMap,poi.location)
        vue.Map.add(search.LabelsLayer);
    }else{
        let url = new URLBuilder().
        scheam("https").
        host(URL_POI_SEARCH).
        addQuery("key",KEY_WEB).
        addQuery("offset",1).
        addQuery("keywords",poi.name).builder()
        axios.get(url).then(res=>{
            vue.Map.setZoomAndCenter(15,res);
            vue.$message(successMessage("切换到"+poi.name))
        })
    }
}
