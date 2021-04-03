
const selectionSort = (arr) => {

	const n = arr.length;
	
	let i = 0;

	while (i < n) {

		// Setting the current index as min.
		let minIndx = i;

		// Setting one index ahead
		let j = i + 1;

		while (j < n) {
			/**
			 * Validating if any alement on the right side of the array is smaller 
			 * than the current 
			 */
			if (arr[j] < arr[minIndx]) {

				// if any of them is smaller we save its index.
				minIndx = j;

			}

			j++;
		}

		/**
		 * Validating that the new min index is not the same as the current 
		 * from the outer loop.
		 */
		if (minIndx !== i) {

			// Selection of the new min item
			const temp = arr[minIndx];

			// Moving current to the old min position
			arr[minIndx] = arr[i];

			// Saving the new min in the current position.
			arr[i] = temp;
		}

		i++;
	}

	return arr;

}

const inputArr = [78, 38, 28, 58, 29, 10, 1, 8, 3, 9, 2];

const res = selectionSort(inputArr);

console.log(res);