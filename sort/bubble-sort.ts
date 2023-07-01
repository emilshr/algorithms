import { sampleInput1, sampleInput2, sampleInput3 } from "./input";

/**
 * @Concept Keep on moving the largest or smallest element to the end of the array till the array gets sorted
 * @TimeComplexity O(n^2)
 */

function bubbleSort(arr: number[]) {
  try {
    const { length } = arr;
    console.log("Sample input: ", arr);
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          arr[j] = arr[j] + arr[j + 1];
          arr[j + 1] = arr[j] - arr[j + 1];
          arr[j] = arr[j] - arr[j + 1];
        }
      }
    }
    console.log("Sorted array: ", arr);
    console.log("----------------------");
  } catch (error) {
    console.error(`Error while performing bubble sort ... ${error}`);
    throw error;
  }
}

bubbleSort(sampleInput1);
bubbleSort(sampleInput2);
bubbleSort(sampleInput3);
