import Vue from 'vue'
import Vuex from 'vuex'
import {createMarkerByLocation} from "../util/createMarkerUtil";
import createShape from "../util/shapeUtil";
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
       Location:function (location,vue){
           if(this.MarkerLayer!=null){
               vue.$store.state.Map.remove(this.MarkerLayer)
           }
           if(this.Polygon!=null){
               vue.$store.state.Map.remove(this.Polygon)
           }
           if(location.location!=''){
               vue.$log.debug(location)
               vue.$store.state.Map.setFitView(null, false, [150, 60, 100, 60])
               let locArray=null;
               if(typeof location.location == "object"){
                   locArray = [location.location.lng,location.location.lat]
               }else if(typeof location.location == 'string'){
                   locArray = locationStrToPxPy(location.location)
               }
               // vue.$store.state.Map.setZoomAndCenter(17,locArray);
               vue.$store.state.Map.setCenter(locArray);
               this.MarkerLayer = createMarkerByLocation(vue.$store.state.AMap,locArray);
               vue.$store.state.Map.add(this.MarkerLayer)
               if(location.shape!=""){
                   let strlocArray = location.shape.split("_")
                   let arr = []
                   strlocArray.forEach(str=>arr.push(locationStrToPxPy(str)))
                   this.Polygon = createShape(arr,vue)
               }
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
        }
    }
});

