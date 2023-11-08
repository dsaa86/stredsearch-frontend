export const extractUniqueValuesFromArray =  function(arr){
    let uniqueValues = [];
    arr.forEach(value => {
        if(!uniqueValues.includes(value)){
            uniqueValues.push(value);
        }
    });
    return uniqueValues;
}

export const capitaliseFirstLetter = function(data){
    let returnData = data
    returnData.forEach((value, index) => {
        returnData[index] = value.charAt(0).toUpperCase() + value.slice(1);
    });
    return returnData;
}

export const prettifyString = function(data){
    data = data.replaceAll("_", " ");
    data = data.replaceAll("-", " ")
    return data.charAt(0).toUpperCase() + data.slice(1);
}