import AMapJS from 'amap-js'
async function init(){
    const loader = new AMapJS.AMapLoader({
        key: 'a30d422d821d20fb8e89ef6e05e0404d',
        version: '1.4.15',
        plugins: []
    });
    await loader.load()
    return loader.AMap
}
export default init();
