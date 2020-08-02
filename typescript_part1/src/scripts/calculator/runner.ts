import { resolveExpression } from  './resolver';
import { isExpression } from './validator';

export const runner = (line: string): number| null => {
    if (!isExpression(line)) { 
        return null; 
    }

    return resolveExpression(line);
}