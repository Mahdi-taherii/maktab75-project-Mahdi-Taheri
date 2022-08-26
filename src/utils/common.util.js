export function getDataType(data) {
    let type = Object.prototype.toString.call(data)
    return type.toLowerCase()
}