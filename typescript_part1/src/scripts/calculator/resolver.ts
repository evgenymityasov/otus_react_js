import { simpleMathOperations, ScalarOperation, mathOperatorsPriorities } from './operations';
import { isNumber } from './validators';


type OperationWithExpressions = {
    first: string,
    second: string,
    operator: string
}

export const getLastPriorityOperation = (expression: string): OperationWithExpressions => {
    let priority = Math.max(...mathOperatorsPriorities);

    while (priority > -1) {
        let operatorLastIndex = -1;
        const operators: string[] = simpleMathOperations.filter(opr => opr.priority === priority)
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
}

export const resolveExpression = (expression: string): number => {
    const lastOperation: OperationWithExpressions = getLastPriorityOperation(expression);

    if (!isNumber(lastOperation.first)) {
        lastOperation.first = resolveExpression(lastOperation.first)
            .toString();
    }

    if (!isNumber(lastOperation.second)) {
        lastOperation.second = resolveExpression(lastOperation.second)
            .toString();
    }

    const operation: ScalarOperation = simpleMathOperations.find(opr => opr.operator === lastOperation.operator);

    return operation.operation(Number(lastOperation.first), Number(lastOperation.second));
}

