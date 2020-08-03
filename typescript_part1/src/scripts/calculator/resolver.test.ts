import { getLastPriorityOperation, resolveExpression } from './resolver'

describe("mathOperators test cases", () => {
    it("erwerer", () => {
        expect(getLastPriorityOperation("233-343+134"))
            .toEqual({
                "first": "233-343",
                "operator": "+",
                "second": "134"
            });
    });
});
