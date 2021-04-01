import { KEY_WEB, URL_POI_SEARCH} from "./const";
import axios from "axios"
import {errorMessage, successMessage} from "./style";
export function search(data,vue){
    vue.$log.debug("get sub event")
    let url =  URL_POI_SEARCH+"?key="+KEY_WEB+"&keywords="+data;
    axios.get(url).then(res=>{
        vue.$log.debug("查询结果:",res.data)
        if(res.data.info=="OK"){
            if(res.data.pois.length!=0){
                let dis = res.data.pois[0]
                vue.Map.setCenter(dis.location)
                vue.$log.error("show search message in div")
                vue.$message(successMessage("已切换到"+dis.pname+dis.address))
            }
        }else {
            vue.$message(errorMessage('查询失败'))
        }

    })
}
