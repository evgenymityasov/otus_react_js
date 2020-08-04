import { simpleMathOperations } from './operations';

describe("mathOpperations test", ()=>{
    it("When add 2 + 2, then return 4", ()=> {
        const operation = simpleMathOperations.find(opr => opr.operator === "+")
                                              .operation;
        expect(operation(2, 2)).toEqual(4);
    });
    it("When sub 2 - 2, then return 0", ()=> {
        const operation = simpleMathOperations.find(opr => opr.operator === "-")
                                              .operation;
        expect(operation(2, 2)).toEqual(0);
    });
    it("When mult 2 * 3, then return 6", ()=> {
        const operation = simpleMathOperations.find(opr => opr.operator === "*")
                                              .operation;
        expect(operation(2, 3)).toEqual(6);
    });
    it("When div 2 / 2, then return 1", ()=> {
        const operation = simpleMathOperations.find(opr => opr.operator === "/")
                                              .operation;
        expect(operation(2, 2)).toEqual(1);
    });
});