import { isNumber, isExpression } from './validators';

describe("test isNumber", () => {
    it("when push expression, then return false", () => {
        expect(isNumber('2+4'))
            .toBeFalsy();
    });
    it("when push empty, then return false", () => {
        expect(isNumber(''))
            .toBeFalsy();
    });
    it("when push letters, then return false", () => {
        expect(isNumber('sfsdf'))
            .toBeFalsy();
    });
    it("when push white space, then return false", () => {
        expect(isNumber(' '))
            .toBeFalsy();
    });
    it("when push line with integer number, then return false", () => {
        expect(isNumber('12'))
            .toBeTruthy();
    });
    it("when push line with float number, then return false", () => {
        expect(isNumber('12.345'))
            .toBeTruthy();
    });
});

describe("test isExpression on line without white spaces", () => {
    it("when push empty line, then return false", () => {
        expect(isExpression("")).toBeFalsy();
    });
    it("when push line with letters, then return false", () => {
        expect(isExpression("2+4qwe")).toBeFalsy();
    });
    it("when push line with not supported operator, then return false", () => {
        expect(isExpression("!24")).toBeFalsy();
    });
    it("when push line with supported operator in invalid position, then return false", () => {
        expect(isExpression("2+4-")).toBeFalsy();
    });
    it("when push line with supported duplicted operator, then return false", () => {
        expect(isExpression("2++4")).toBeFalsy();
    });
    it("when push line with complex expression, then return false", () => {
        expect(isExpression("2+4*10/23-12")).toBeTruthy();
    });
    it("when push line with float numbers, then return false", () => {
        expect(isExpression("2+4*10.23")).toBeTruthy();
    });
    it("when push line with simple expression, then return false", () => {
        expect(isExpression("2+4")).toBeTruthy();
    });
});