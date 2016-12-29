var arr = [1, 2, 8, 11, 9, 4, 12, 3, 70];


function selectionSort(arr) {
//create three variables to be used for indexes, i is the current index and j is the one we are swapping based on value
  var i, j, minValue;

//two loops going through the array for the values of var i and var j
  for (i = 0; i < arr.length; i++) {
    minValue = arr[i];

    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < minValue) {

//set the minValue variable to the value located at the j index
        minValue = arr[j];


//create a "temp" variable which takes on the value that is located at the index of i in the array, then swap the values located at arr[i] and arr[j]
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }

    }
  }
  return arr;
}
console.log(selectionSort(arr));
