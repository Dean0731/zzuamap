import AMapJS from 'amap-js'
async function init(){
    const loaderAMapUI = new AMapJS.AMapUILoader({
        version: '1.1'
    });
    await loaderAMapUI.load()
    return loaderAMapUI.AMapUI
}
export default init();
