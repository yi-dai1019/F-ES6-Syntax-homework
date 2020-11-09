const parseData = ({ data, column }) => {
    const keyList = column.map(element => element.name);
    return data.map(element => {
        const obj = {};
        keyList.forEach((key, index) => obj[key] = element[index]);
        return obj;
    })
}
export { parseData };
