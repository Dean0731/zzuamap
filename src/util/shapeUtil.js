export default function createShape(arr,vue){
    let polygon = new vue.$store.state.AMap.Polygon({
        map: vue.$store.state.Map,
        strokeColor: "#d4625f",
        strokeOpacity: 1,
        strokeWeight: 4,
        fillColor: '#d4625f',
        fillOpacity: 0.15,
        strokeStyle: "solid",
        path: arr,
    });
    return polygon;
}