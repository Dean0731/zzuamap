export default function autoComplete(vue){
    return new vue.$store.state.AMap.AutoComplete({
        // city:"郑州",
        citylimit:false,
    });
}
