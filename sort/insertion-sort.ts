import { swapValues } from "./common";
import { sampleInput1, sampleInput2, sampleInput3 } from "./input";

// function insertionSort(arr: number[]) {
//   try {
//     console.log("Sample array: ", arr);

//     const { length } = arr;
//     for (let i = 0; i < length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         arr[i] = arr[i] + arr[i + 1];
//         arr[i + 1] = arr[i] - arr[i + 1];
//         arr[i] = arr[i] - arr[i + 1];
//         for (let j = i; j > 0; j--) {
//           if (arr[j - 1] > arr[j]) {
//             arr[j - 1] = arr[j - 1] + arr[j];
//             arr[j] = arr[j - 1] - arr[j];
//             arr[j - 1] = arr[j - 1] - arr[j];
//           } else {
//             break;
//           }
//         }
//       }
//     }
//     console.log("Sorted array is: ", arr);
//     console.log("-------------------------------");
//   } catch (error) {
//     console.error(`Error while performing insertion sort ... ${error}`);
//     throw error;
//   }
// }

function insertionSort(arr: number[]) {
  try {
    console.log("Sample array: ", arr);

    const { length } = arr;

    let key = 0;
    let j = 0;
    for (let i = 1; i < length; i++) {
      key = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    console.log("Sorted array is: ", arr);
    console.log("-------------------------------");
  } catch (error) {
    console.error(`Error while performing insertion sort ... ${error}`);
    throw error;
  }
}

insertionSort(sampleInput1);
insertionSort(sampleInput2);
insertionSort(sampleInput3);
