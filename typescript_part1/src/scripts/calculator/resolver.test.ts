import { getLastPriorityOperation } from './resolver'

describe("mathOperators test cases", () => {
    it("erwerer", () => {
      expect(getLastPriorityOperation("233-343+134")).toBe(2);
    });
  });