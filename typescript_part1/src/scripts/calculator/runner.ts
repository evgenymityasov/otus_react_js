import { resolveExpression } from  './resolver';
import { isExpression, isNumber } from './validators';

export const runner = (line: string): number| string => {
    const clearedLine = line.replace(/\s/g, '');

    if (!isExpression(clearedLine)) { 
        return "invalid expression"; 
    }

    if(isNumber(clearedLine)){
        return clearedLine;
    }

    return  resolveExpression(clearedLine);
}