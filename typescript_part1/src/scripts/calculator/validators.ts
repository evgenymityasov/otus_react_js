export const isExpression = (line: string): boolean => {
    const pattern = /^((\d+(\.\d+)?)|(\.\d+){1})((\+|\-|\*|\/)((\d+(\.\d+)?)|(\.\d+){1}))*$/;
    return pattern.test(line);
}

export const isNumber = (line: string): boolean => {
    const pattern = /^((\d+(\.\d+)?)|(\.\d+){1})$/;

    return pattern.test(line);
}