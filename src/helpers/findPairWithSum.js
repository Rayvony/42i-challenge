export default function findPairWithSum(numbers, targetSum) {
  if (!Number.isInteger(targetSum)) {
    throw new Error("Target number must be an integer");
  }

  if (!Array.isArray(numbers) || !numbers.every(Number.isFinite)) {
    throw new Error("Numbers must be an array of numbers");
  }

  const numSet = new Set();

  for (const num of numbers) {
    const complement = targetSum - num;

    if (numSet.has(complement)) {
      return [complement, num];
    }

    numSet.add(num);
  }

  return [];
}
