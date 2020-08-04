import { getLastPriorityOperation, resolveExpression } from './resolver'

describe("getLastPriorityOperation test", () => {
    it("erwerer", () => {
        expect(getLastPriorityOperation("233-343+134"))
            .toEqual({
                "first": "233-343",
                "operator": "+",
                "second": "134"
            });
    });
});

describe("resolveExpression test", () => {
    it("When second operand is expr (10+2*5), then return 20", () => {
        expect(resolveExpression("10+2*5"))
                .toEqual(20);
    });
    it("When first operand is expr (10*2+5), then return 20", () => {
        expect(resolveExpression("10*2+5"))
                .toEqual(25);
    });
});
