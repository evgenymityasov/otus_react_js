import { runner } from './runner';

const invalidExpression = '2 -- 3';
const correctExpression = '2 + 4';
const correctExpressionResult = 6
const errorMessage = "invalid expression";

describe("test runner", () => {
    it("when push correct expression, then return result", () => {
        expect(runner(correctExpression))
            .toEqual(correctExpressionResult);
    });

    it("when push incorrect expression, then return error message", () => {
        expect(runner(invalidExpression))
            .toEqual(errorMessage);
    });

    it("when push empty string, then return error message", () => {
        expect(runner(""))
            .toEqual(errorMessage);
    });
    it("when push number, then return pushed number", () => {
        expect(runner("23"))
            .toEqual("23");
    });
})