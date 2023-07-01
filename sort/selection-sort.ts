import { sampleInput1, sampleInput2, sampleInput3 } from "./input";

/**
 * @Concept Find the first minimum element and place it in the right position, keep on iterating till we reach the end of the array
 * @TimeComplexity O(n^2)
 * @AuxiliarySpace O(1) as the only extra memory used is for temporary variables while swapping two values in Array. The selection sort never makes more than O(N) swaps and can be useful when memory writing is costly.
 */
function selectionSort(arr: number[]) {
  try {
    console.log("Sample array: ", arr);

    const { length } = arr;
    let min = 0;
    let swapIndex = 0;

    for (let i = 0; i < length - 1; i++) {
      swapIndex = i;
      min = arr[i];
      for (let j = i + 1; j < length; j++) {
        if (arr[j] < min) {
          min = arr[j];
          swapIndex = j;
        }
      }
      // Swapping two numbers
      if (swapIndex !== i) {
        arr[i] = arr[swapIndex] + arr[i];
        arr[swapIndex] = arr[i] - arr[swapIndex];
        arr[i] = arr[i] - arr[swapIndex];
      }
    }

    console.log("Sorted array is: ", arr);
    console.log("-------------------------------");
  } catch (error) {
    console.error(`Error while running selection sort ... ${error}`);
    throw error;
  }
}

selectionSort(sampleInput1);
selectionSort(sampleInput2);
selectionSort(sampleInput3);
