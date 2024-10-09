let arr =  [60,45,50,123,1,10,3]
bubbleSort(arr)
function bubbleSort(arr){
    return arr.sort((a,b)=> a-b)
}
console.log("sorted array is",arr)