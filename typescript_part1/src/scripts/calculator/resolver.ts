import { getOperation, BinaryOperation, mathOperations, ScalarOperation, mathOperatorsPriorities } from './operations'

export interface IDirtyOperation { 
    first: string|number,
    second: string|number, 
    operator: string
}
 
export const getLastPriorityOperation = (expression: string): IDirtyOperation => {
    let priority = Math.max(...mathOperatorsPriorities);

    while (priority > -1) {
        let operatorLastIndex = -1;
        const operators: string[] = mathOperations.filter(opr => opr.priority === priority)
            .map(opr => opr.operator);
        operators.forEach(opr => {
            const index: number = expression.lastIndexOf(opr);
            if (index != -1 && index > operatorLastIndex) {
                operatorLastIndex = index;
            }
        })

        if (operatorLastIndex != -1) {
            return {
                first: expression.substring(0, operatorLastIndex),  
                second: expression.substring(operatorLastIndex + 1, expression.length),
                operator: expression.substr(operatorLastIndex, 1)
            };
        }

        priority--;
    }

    return;
    // return {
    //     first:  expression.substring(operationIndex + 1, expression.length),
    //     second: expression.substring(0, operationIndex - 1),
    //     operator: expression.substr(operationIndex, 1)
    // };
}

export const resolveExpression = (expression: string): number => {
    const lastOperation: IDirtyOperation = getLastPriorityOperation(expression);
 
    if(typeof(lastOperation.first) !== 'number'){
        lastOperation.first = resolveExpression(lastOperation.first);
    }

    if(typeof(lastOperation.second) !== 'number'){
        lastOperation.second = resolveExpression(lastOperation.second);
    }

    const operation: ScalarOperation = mathOperations.find(opr => opr.operator === lastOperation.operator);

    return operation.operation(lastOperation.first, lastOperation.second);
}

