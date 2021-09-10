import { ulnGeneratorFactory } from "./uln";

describe('ULN', () => {
  it('generate valid ULN number', () => {
    const ulnGen = ulnGeneratorFactory();
    expect(ulnGen.next()).toBe();
  });
});
