
export function successMessage(data){
    return {showClose: true, message: data, type: 'success'}
}
export function errorMessage(data){
    return {showClose: true, message: data, type: 'error'}
}
export function warnMessage(data){
    return {showClose: true, message: data, type: 'warning'}
}
export function infoMessage(data){
    return {showClose: true, message: data, }
}
