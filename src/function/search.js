import { KEY_WEB, URL_POI_SEARCH} from "../config/config";
import URLBuilder from "../util/urlUtil"
export function search(pageNumber,keyword,vue){
    let url = new URLBuilder()
        .scheam("https").host(URL_POI_SEARCH)
        .addQuery("key",KEY_WEB)
        .addQuery("offset",vue.page_size)
        .addQuery("page",pageNumber)
        .addQuery("types",120000)
        .addQuery("keywords",keyword).builder()
    // addQuery("citylimit",true)
    return vue.axios.get(url)
}
