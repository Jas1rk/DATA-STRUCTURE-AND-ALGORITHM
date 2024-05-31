function binarySearch(arr,target){ /////binary search ////
    arr.sort((a,b)=> a-b)
    let leftIndex = 0
    let rightIndex  = arr.length-1
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(target === arr[middleIndex]){
            return middleIndex
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1
        }else{
            leftIndex = middleIndex + 1
        }
    }
    return -1
    
    
}
 



/////////////////////////////////


function recursiveBinarySearch(arr,target){  ///recursive binary search
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return - 1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) /2)
    if(target === arr[middleIndex]){
        return middleIndex
    }
    if(target < arr[middleIndex]){
        search(arr,target,leftIndex,middleIndex - 1)
    }else{
        search(arr,target,middleIndex + 1,rightIndex)
    }

}

console.log(binarySearch([1,3,54,6,2],2))
console.log(binarySearch([1,3,54,6,2],6))
console.log(binarySearch([1,3,54,6,2],37))
