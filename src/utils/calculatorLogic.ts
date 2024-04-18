import {
  Operation,
  getAction,
  isHighPriorityOp,
  isLowPriorityOp,
} from './operations';
type CalcElement = number | Operation;

const getPrecedence = (op: Operation): number => {
  if (isHighPriorityOp(op)) {
    return 2;
  } else if (isLowPriorityOp(op)) {
    return 1;
  }
  return 0;
};

/**
 * Converts an array of calculation elements (numbers and operations) to Reverse Polish Notation (RPN).
 * RPN is a mathematical notation in which operators follow their operands.
 * This function uses the Shunting Yard algorithm to convert the input to RPN.
 * @param values An array of calculation elements (numbers and operations).
 * @returns An array of calculation elements in RPN format.
 */
const toRPN = (values: CalcElement[]): CalcElement[] => {
  const output: CalcElement[] = [];
  const opsStack: Operation[] = [];

  values.forEach((value) => {
    if (typeof value === 'number') {
      output.push(value);
    } else if (typeof value === 'string') {
      while (
        opsStack.length > 0 &&
        getPrecedence(opsStack[opsStack.length - 1]) >= getPrecedence(value)
      ) {
        output.push(opsStack.pop()!);
      }
      opsStack.push(value);
    }
  });

  while (opsStack.length > 0) {
    output.push(opsStack.pop()!);
  }

  return output;
};

export const calculate = (values: CalcElement[]): number => {
  const rpnValues = toRPN(values);
  const performOperation = (x: number, y: number, op: Operation): number => {
    const action = getAction(op);
    if (action === null) {
      throw new Error(`Invalid operation: ${op}`);
    }
    return action(x, y);
  };

  const result = rpnValues.reduce((stack: number[], value) => {
    if (typeof value === 'number') {
      stack.push(value);
    } else if (typeof value === 'string') {
      if (stack.length < 2) {
        throw new Error('Invalid RPN expression');
      }
      const y = stack.pop()!;
      const x = stack.pop()!;
      stack.push(performOperation(x, y, value));
    }
    return stack;
  }, []);

  if (result.length !== 1) {
    throw new Error('Invalid RPN expression');
  }

  return result[0];
};
