function merge(arr1, arr2) {
 let i = 0;
 let j = 0;
 let results = [];

 while(i < arr1.length && j < arr2.length) {
     if (arr2[j] > arr1[i]) {
         results.push(arr1[i]);
         i++;  
     } else {
         results.push(arr2[j])
         j++
     }
 }
 while(i < arr1.length) {
     results.push(arr1[i]);
     i++;
 }
 while(j < arr2.length) {
     results.push(arr2[j]);
     j++;
 }
 return results
}

const arr = ["potato", "trick", "joke", "magic", "leg", "steel", "snails", "balloon", "smell", "maid", "quince", "territory", "cushion", "tooth", "touch", "creature", "flag", "kick", "beggar", "bed", "learning", "knee", "fact", "acoustics", "horse", "dinner"]

const mergeSort = arr => {
 if (arr.length <= 1) return arr;

 let mid = Math.floor(arr.length / 2), 
     left = mergeSort(arr.slice(0, mid)),
     right = mergeSort(arr.slice(mid));

 return merge(left, right);
};

function binarySearch(arr, x, start, end) {
    if( start > end) {
     return false;
    }
   
    var mid = Math.floor((start + end) / 2);
   
    if(arr[mid] === x) {
     return true;
    }
   
    else if(x > arr[mid]) {
     return binarySearch(arr, x, mid+1, end)
    }
   
    else {return binarySearch(arr, x, start, mid-1)};
   
    return false;
   }

// console.log(mergeSort(arr));
console.log(binarySearch(mergeSort(arr), 'leg', 0, mergeSort(arr).length-1))
