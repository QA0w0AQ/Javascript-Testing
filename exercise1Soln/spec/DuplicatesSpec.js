describe("Remove Duplicates", function () {
  it("should return an empty array when provided an empty array", function () {
    expect( 
      removeDuplicate([])
    ).toEqual([]);
  });

  it("should return a new array with duplicate numbers removed", function () {
    expect(
      removeDuplicate([1,2,2,3,4,5])
    ).toEqual([1,2,3,4,5]);
  });

  it("should return a new array in the same order as the provided array", function () {
    expect(removeDuplicate([5,4,3,2,1])).toEqual([5,4,3,2,1]);
    expect(removeDuplicate([1,2,3,4,5])).toEqual([1,2,3,4,5]);
  });

  it("should always keep the first number of duplicate numbers", function () {
    expect(removeDuplicate([2, 1, 2, 2, 2, 2, 2, 4, 5])).toEqual([2, 1, 4, 5]);
    expect(removeDuplicate([1, 2, 2, 2, 2, 2, 4, 5])).toEqual([1, 2, 4, 5]);
  });

});

