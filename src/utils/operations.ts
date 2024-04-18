export type Operation = '+' | '-' | '*' | '/';
type OperationFunction = (x: number, y: number) => number;

export const getAction = (action: Operation): OperationFunction | null => {
  switch (action) {
    case '+':
      return (x: number, y: number): number => x + y;
    case '-':
      return (x: number, y: number): number => x - y;
    case '*':
      return (x: number, y: number): number => x * y;
    case '/':
      return (x: number, y: number): number => x / y;
    default:
      console.error('Action is not defined!');
      return null;
  }
};

export const isHighPriorityOp = (op: Operation) => ['*', '/'].includes(op);
export const isLowPriorityOp = (op: Operation) => ['+', '-'].includes(op);
