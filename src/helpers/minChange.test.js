import findPairWithSum from "./findPairWithSum";

describe("findPairWithSum", () => {
  test("returns an empty array when there is no pair", () => {
    const result = findPairWithSum([1, 2, 3, 4], 10);
    expect(result).toEqual([]);
  });

  test("returns a pair that sums to the target", () => {
    const result = findPairWithSum([1, 2, 3, 4], 7);
    expect(result).toEqual([3, 4]);
  });

  test("throws an error if targetSum is not an integer", () => {
    expect(() => findPairWithSum([1, 2, 3, 4], "not an integer")).toThrow("Target number must be an integer");
  });

  test("throws an error if numbers is not an array of numbers", () => {
    expect(() => findPairWithSum("not an array", 10)).toThrow("Numbers must be an array of numbers");
  });

  test("returns a pair that sums to the target when present", () => {
    const result = findPairWithSum([5, 2, 8, 4, 7], 12);
    expect(result).toEqual([8, 4]);
  });
});
