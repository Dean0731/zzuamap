import {KEY_WEB, URL_CITY_SEARCH, URL_POI_SEARCH} from "../config/config";
import URLBuilder from "../util/urlUtil"
import {errorMessage} from "../util/messageUtil";
export function search(pageNumber,keyword,vue){
    let url = new URLBuilder()
        .scheam("https").host(URL_POI_SEARCH)
        .addQuery("key",KEY_WEB)
        .addQuery("offset",vue.page_size)
        .addQuery("page",pageNumber)
        .addQuery("types",120000)
        .addQuery("keywords",keyword)
        if(vue.city!=null){
            url.addQuery("city",vue.city)
            // url.addQuery("citylimit",true)
        }
        url = url.builder()
    return vue.axios.get(url)
}

export function searchCity(keyword,vue){
    let url = new URLBuilder()
        .scheam("https").host(URL_CITY_SEARCH)
        .addQuery("key",KEY_WEB)
        .addQuery("subdistrict",0)
        .addQuery("extensions","base")
        .addQuery("keywords",keyword).builder()
    return vue.axios.get(url)
}

export function handler(res,funcdata,funcnodata,vue){
    if(res.data.status==1){
        if(res.data.count!=0){
            funcdata()
        }else{
            funcnodata()
        }
    }else {
        vue.$message(errorMessage(res.data.info))
    }
}