export default function findPairWithSum(numbers, targetSum) {
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
