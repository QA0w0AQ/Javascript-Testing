describe("Positive Sum", () => {
  it("should return the sum of positive numbers in an array", () => {
    expect(positiveSum([1,2,3,4])).toBe(10)
    expect(positiveSum([10, 20, 30, 40])).toEqual(100)
  })

  it("should not include negative numbers in the sum", () => {
    expect(positiveSum([1, 2, 3, -4])).toBe(6)
    expect(positiveSum([10, 20, -30, 40])).toEqual(70)
  })

  it("should return 0 if the provided array is empty", () => {
    expect(positiveSum([])).toBe(0)
    expect(positiveSum([1,2,3])).not.toBe(0)
  })

  it("should return 0 if the provided array contains only negative numbers", () => {
    expect(positiveSum([-1, -2, -3])).toBe(0)
  })
})

describe("isDivisible", () => {
  it("should return true when it's divisble by both divisors", () => {
    expect(isDivisible(8,4,2)).toBe(true)
  })

  it("should return false when it is not divisible by either divisor", () => {
    expect(isDivisible(8, 3, 6)).toBe(false)
  })

  it("should return false when it is not divisible by one of the divisors", () => {
    expect(isDivisible(8, 4, 6)).toBe(false)
  })

  it("should return false when it smaller than both divisors", () => {
    expect(isDivisible(2, 4, 6)).toBe(false)
  })
})

describe("solution", () => {
  it("should return itself when there is only 1 character", () => {
    expect(solution("a")).toBe("a")
  })

  it("should reverse the string when there are multiple characters", () => {
    expect(solution("abcd")).toBe("dcba")
  })

  it("should return an empty string if there are not characters", () => {
    expect(solution("")).toBe("")
  })
})

describe("Reverse Sequence", () => {
  it("returns an array, counting down from the number provided", () => {
    expect(reverseSeq(5)).toEqual([5,4,3,2,1])
  })

  it("should take a number as a parameter", () => {
    expect(reverseSeq("")).toEqual([])
  })

  it("should take a number as a parameter", () => {
    expect(reverseSeq("5")).toEqual(["5", 4,3,2,1])
  })

  it("should return an empty array for 0", () => {
    expect(reverseSeq(0)).toEqual([])
  })
  
  it("should return an empty array for any negative numbers", () => {
    expect(reverseSeq(-1)).toEqual([])
  })
})