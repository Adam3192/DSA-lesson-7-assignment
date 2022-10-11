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
