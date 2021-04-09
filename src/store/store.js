import Vue from 'vue'
import Vuex from 'vuex'
import {createMarkerByLocation} from "../util/createMarkerUtil";
import createShape from "../util/shapeUtil";
import {warnMessage} from "../util/messageUtil";
Vue.use(Vuex)
export function locationStrToPxPy(locationstr){
    // "px,px"  ->  [px,py]
    let px_py = locationstr.split(",")
    let ret = []
    for (let i=0;i<px_py.length;i++){
        ret.push(Number(px_py[i]))
    }
    return ret;
}

export default new Vuex.Store({
   state:{
       AMap:null,
       Map:null,
       AMapUI:null,
       MarkerLayer:null,
       MapType:null,
       Polygon:null,
       AutoComplete:null,
       Location:function (location,vue){
           vue.$log.debug(location)
           // let clear = [this.MarkerLayer,this.Polygon]
           // clear.forEach(i=>{
           //     if(i!=null){
           //         vue.$store.state.Map.remove(i)
           //     }
           // })
           vue.$store.state.Map.clearMap()
           let locArray= location.location;
           if(locArray!=''&location!=null){
                if(typeof location.location == 'string'){
                   locArray = locationStrToPxPy(location.location)
               }
               // vue.$store.state.Map.setZoomAndCenter(17,locArray);
               vue.$store.state.Map.setCenter(locArray);

               this.MarkerLayer = createMarkerByLocation(vue.$store.state.AMap,locArray);
               vue.$store.state.Map.add(this.MarkerLayer)
               if(location.shape!="" && location.shape !=undefined){
                   this.Polygon = createShape(shapeStrToArray(location.shape),vue)
               }
               vue.$store.state.Map.setFitView(null, false, [150, 60, 100, 60])
           }else{
               vue.$message(warnMessage("请选择详细地址"))
           }

       }
   },
    mutations:{
       setMap(state,obj){
           state.Map = obj;
       },
        setAMap(state,obj){
           state.AMap = obj;
        },
        setAMapUI(state,obj){
           state.AMapUI = obj
        },
        setMapType(state,obj){
           state.MapType = obj;
        },
        setAutoComplete(state,obj){
           state.AutoComplete = obj;
        }
    }
});

function shapeStrToArray(shapeStr){
    let arr = []
    let strlocArray = shapeStr.split("_")
    strlocArray.forEach(str=>arr.push(locationStrToPxPy(str)))
    return arr;
}

