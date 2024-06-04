/*
    PROBLEM STATEMENT:
    Given an array of integers and a target sum, determine if there exists a contiguous
    subarray within the array that sums up to the target. Return true if such a subarray exists,
    otherwise return false.
*/

function isContiguousArray(arr, target) {
    
    //running sum=0 and we haven't jumped any number yet so left = 0
    let currentSum = 0;
    let left = 0;

    for( let i=0; i< arr.length; i++ ){

        //update current sum
        currentSum += arr[i];

        //We reduce current sum by removing first element if target is less than current sum
        while( Math.abs(currentSum) > Math.abs(target) && left < i ) { //Math.abs works for negative numbers
            currentSum -= arr[left];
            left++;
        }

        //Check if current sum is equal to target
        if( currentSum == target )
            return true;
        
    }

    return false;
}


function main(){

    let arr = [1, 2, 3, 4, 5];
    let target = 9;
    let output = isContiguousArray(arr, target);
    let expected = true;
    
    // Test case 1: Target sum is in the array
    console.log("\nTest 1: Target is In The array"); // Expected output: true (2 + 3 + 4)
    console.log("Expected: "+ expected);
    console.log("Output: "+ output);

    // Test case 2: Target sum is not in the array
    arr = [1, 2, 3, 4, 5];
    target = 18;
    output = isContiguousArray(arr, target);
    expected = false;
    console.log("\nTest 2: Target is Not In The array"); // Expected output: false
    console.log("Expected: "+ expected);
    console.log("Output: "+ output);

    // Test case 3: Array contains negative numbers
    arr =[-1, -2, -3, -4, 5];
    target = -6;
    output = isContiguousArray(arr, target);
    expected = true;
    console.log("\nTest 3: Array contains negative numbers"); // Expected output: true
    console.log("Expected: "+ expected);
    console.log("Output: "+ output);

    // Test case 4: Array contains a single element equal to the target sum
    arr = [7];
    target = 7;
    output = isContiguousArray(arr, target);
    expected = true;
    console.log("\nTest 4: Array contains a single element equal to the target sum"); // Expected output: true
    console.log("Expected: "+ expected);
    console.log("Output: "+ output);

    // Test case 5: Array contains a single element not equal to the target sum
    arr = [10];
    target = 7;
    output = isContiguousArray(arr, target);
    expected = false;
    console.log("\nTest 5: Array contains a single element not equal to the target sum"); // Expected output: false
    console.log("Expected: "+ expected);
    console.log("Output: "+ output);

    // Test case 6: Array is empty
    arr = [];
    target = 0;
    output = isContiguousArray(arr, target);
    expected = false;
    console.log("\nTest 6: Array is empty"); // Expected output: false
    console.log("Expected: "+ expected);
    console.log("Output: "+ output);

}


main();