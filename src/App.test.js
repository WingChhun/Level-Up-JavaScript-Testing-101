import { hello, add } from "./App";

//Import app

console.log(hello());

//First test
describe("First Test - hello", () => {
  it("Should output hello", () => {
    expect(hello()).toBe("hello");
  });
});

describe("Second Test - add", () => {
  it("Should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(2, 1)).toBe(3);
    expect(add(5, 100)).toBe(105);
    expect(add(-1, 2)).toBe(1);
    expect(add(-2, 2)).toBe(0);
  });
  it("should not add strings", () => {
    expect(add(2, "2")).toBe(null);
  });
  it("should not add objects", () => {
    expect(add(2, {})).toBe(null);
  });
  it("should not add arrays", () => {
    expect(add(2, [])).toBe(null);
  });
});
