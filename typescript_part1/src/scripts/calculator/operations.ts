export type BinaryOperation = (first: number, second: number) => number

const addition: BinaryOperation = (first, second) => first + second;
const subtraction: BinaryOperation =  (first, second)=> first - second;
const multiplication: BinaryOperation =  (first, second) => first * second;
const divition: BinaryOperation =  (first, second) => first / second;

export type ScalarOperators = "+" | "-" | "*" | "/";

export const mathOperatorsPriorities: number[] = [0,1];

export type ScalarOperation = {
    operator: string, 
    priority: number, 
    operation: BinaryOperation
};

export const mathOperations: ScalarOperation[] = [
    {
        operator: "+", 
        priority: 1,
        operation: addition
    }, 
    {
        operator: "-", 
        priority: 1,
        operation: subtraction
    },
    {
        operator: "*", 
        priority: 0,
        operation: multiplication
    },
    {
        operator: "/", 
        priority: 0,
        operation: divition
    }
]



export const getOperation = (operator: string): BinaryOperation => {
    switch(operator){
        case '+': return addition;
        case '-': return subtraction;
        case '*': return multiplication;
        case '/': return divition;
        default: (first: number, second: number): number => NaN
    }
};

