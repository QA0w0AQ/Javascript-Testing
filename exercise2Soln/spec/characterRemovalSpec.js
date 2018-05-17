describe("characterRemoval", () => {
  it("should remove the first and last character", () =>{
      expect(characterRemoval("Satveer")).toBe("atvee")
      expect(characterRemoval("John")).toBe("oh")
  })

  it("should return an empty string if the string provided is less than 3 characters", () => {
    expect(characterRemoval("hi")).toBe("")
    expect(characterRemoval("o")).toBe("")
    expect(characterRemoval("")).toBe("")
  })

})