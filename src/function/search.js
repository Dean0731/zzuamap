import { KEY_WEB, URL_POI_SEARCH} from "../config/config";
import URLBuilder from "../util/urlUtil"
import {errorMessage, warnMessage} from "../util/messageUtil";
export function search(pageNumber,keyword,vue){
    let url = new URLBuilder()
        .scheam("https").host(URL_POI_SEARCH)
        .addQuery("key",KEY_WEB)
        .addQuery("offset",vue.page_size)
        .addQuery("page",pageNumber)
        .addQuery("keywords",keyword).builder()
    // addQuery("citylimit",true)
    vue.axios.get(url).then(res=>{
        if(res.data.status==1){
            if(res.data.count!=0){
                    vue.places = res.data.pois
                    vue.total = Number(res.data.count)>vue.page_size*100?vue.page_size*100:Number(res.data.count)
            }else{
                vue.$message(warnMessage('未查询到结果'))
            }
        }else {
            vue.$message(errorMessage(res.data.info))
        }
    })
}
