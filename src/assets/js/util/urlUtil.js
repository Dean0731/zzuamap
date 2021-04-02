export default function URLBuilder(){
    this.scheam = "http"
    this.host = "blog.dean0731.top"
    this.parameter = {}
    this.scheam = function (scheam){
        this.scheam = scheam
        return this
    }
    this.host = function (host){
        this.host = host
        return this
    }

    this.addQuery = function(key,value){
        this.parameter[key]=value
        return this;
    }
    this.builder = function (){
        let url = this.scheam.concat("://").concat(this.host)
        if(Object.keys(this.parameter).length!=0){
            url = url.concat("?")
            let size = 0;
            for(let key in this.parameter){
                size++
                url=url.concat(key).concat("=").concat(this.parameter[key])
                if(size<Object.keys(this.parameter).length){
                    url = url.concat("&")
                }
            }
        }
        return url;
    }
}